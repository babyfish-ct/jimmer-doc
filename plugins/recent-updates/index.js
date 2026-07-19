const {execFileSync} = require('node:child_process');

const CONTENT_PATHS = [
  {
    prefix: 'i18n/zh/docusaurus-plugin-content-docs/current/',
    pluginId: 'default',
  },
  {
    prefix: 'i18n/zh/docusaurus-plugin-content-faq/current/',
    pluginId: 'faq',
  },
  {prefix: 'docs/', pluginId: 'default'},
  {prefix: 'faq/', pluginId: 'faq'},
];

const GIT_PATHS = CONTENT_PATHS.map(({prefix}) => prefix.replace(/\/$/, ''));

function readRecentCommits(siteDir) {
  const format = '%x1e%H%x1f%cs%x1f%an%x1f%s';
  const output = execFileSync(
    'git',
    [
      'log',
      '--no-merges',
      '--diff-filter=AMR',
      '-10',
      '--date=short',
      `--pretty=format:${format}`,
      '--name-only',
      '--',
      ...GIT_PATHS,
    ],
    {
      cwd: siteDir,
      encoding: 'utf8',
    },
  );

  return output
    .split('\x1e')
    .map((record) => record.trim())
    .filter(Boolean)
    .map(parseCommit);
}

function parseCommit(record) {
  const [header, ...files] = record.split('\n');
  const [hash, date, author, subject] = header.split('\x1f');

  return {
    hash,
    date,
    author,
    subject,
    files: files.filter(Boolean),
  };
}

function toDocumentIdentity(file) {
  const contentPath = CONTENT_PATHS.find(({prefix}) => file.startsWith(prefix));
  if (!contentPath || !/\.mdx?$/.test(file)) {
    return undefined;
  }

  const id = file.slice(contentPath.prefix.length).replace(/\.mdx?$/, '');
  return {
    id,
    pluginId: contentPath.pluginId,
  };
}

function collectDocumentMetadata(allContent) {
  const docsContent = allContent['docusaurus-plugin-content-docs'] ?? {};
  const documents = new Map();

  for (const [pluginId, content] of Object.entries(docsContent)) {
    const loadedVersions = content.loadedVersions ?? [];
    const currentVersion =
      loadedVersions.find(({isLast}) => isLast) ?? loadedVersions[0];

    for (const document of currentVersion?.docs ?? []) {
      documents.set(`${pluginId}:${document.id}`, {
        key: `${pluginId}:${document.id}`,
        id: document.id,
        title: document.title,
        permalink: document.permalink,
      });
    }
  }

  return documents;
}

function enrichCommits(commits, documents, repositoryUrl) {
  return commits.map((commit) => {
    const changedDocuments = new Map();

    for (const file of commit.files) {
      const identity = toDocumentIdentity(file);
      if (!identity) {
        continue;
      }

      const key = `${identity.pluginId}:${identity.id}`;
      const document = documents.get(key);
      if (document) {
        changedDocuments.set(key, document);
      }
    }

    return {
      hash: commit.hash,
      shortHash: commit.hash.slice(0, 7),
      subject: commit.subject,
      author: commit.author,
      date: commit.date,
      commitUrl: `${repositoryUrl}/commit/${commit.hash}`,
      documents: [...changedDocuments.values()],
    };
  });
}

module.exports = function recentUpdatesPlugin(context) {
  const {siteDir, siteConfig} = context;
  const repositoryUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  let commits = [];

  return {
    name: 'recent-updates',
    loadContent() {
      commits = readRecentCommits(siteDir);
      return commits;
    },
    async allContentLoaded({allContent, actions}) {
      const documents = collectDocumentMetadata(allContent);
      const updates = enrichCommits(commits, documents, repositoryUrl);
      const updatesPath = await actions.createData('recent-updates.json', updates);

      actions.addRoute({
        path: `${context.baseUrl}recent-updates`,
        component: '@site/src/components/RecentUpdatesPage/index.tsx',
        exact: true,
        modules: {
          updates: updatesPath,
        },
      });
    },
  };
};
