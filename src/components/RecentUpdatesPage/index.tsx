import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {useZh} from '@site/src/util/use-zh';
import styles from './styles.module.css';

type RecentDocument = {
  key: string;
  id: string;
  title: string;
  permalink: string;
};

type RecentUpdate = {
  hash: string;
  shortHash: string;
  subject: string;
  author: string;
  date: string;
  commitUrl: string;
  documents: RecentDocument[];
};

type RecentUpdatesPageProps = {
  updates: RecentUpdate[];
};

const COPY = {
  en: {
    title: 'Recent updates',
    description: 'The 10 latest commits that updated the Jimmer documentation.',
    updatedBy: 'Updated by',
    changedDocuments: 'Changed documents',
    noDocuments: 'This commit only changed shared documentation content.',
  },
  zh: {
    title: '最近更新',
    description: '查看最近 10 次更新 Jimmer 文档的提交。',
    updatedBy: '更新者',
    changedDocuments: '涉及文档',
    noDocuments: '本次提交仅更新了共享文档内容。',
  },
};

function formatDate(date: string, isZh: boolean): string {
  return new Intl.DateTimeFormat(isZh ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: isZh ? 'numeric' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function RecentUpdatesPage({
  updates,
}: RecentUpdatesPageProps): JSX.Element {
  const isZh = useZh();
  const copy = isZh ? COPY.zh : COPY.en;

  return (
    <Layout title={copy.title} description={copy.description}>
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>Jimmer documentation</p>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </header>

          <div className={styles.timeline}>
            {updates.map((update) => (
              <article className={styles.update} key={update.hash}>
                <div className={styles.marker} aria-hidden="true" />
                <div className={styles.card}>
                  <div className={styles.commitHeader}>
                    <div>
                      <time dateTime={update.date}>
                        {formatDate(update.date, isZh)}
                      </time>
                      <h2>
                        <a
                          href={update.commitUrl}
                          target="_blank"
                          rel="noreferrer">
                          {update.subject}
                        </a>
                      </h2>
                    </div>
                    <a
                      className={styles.hash}
                      href={update.commitUrl}
                      target="_blank"
                      rel="noreferrer">
                      {update.shortHash}
                    </a>
                  </div>

                  <p className={styles.author}>
                    {copy.updatedBy} <strong>{update.author}</strong>
                  </p>

                  <div className={styles.documents}>
                    <span className={styles.documentsLabel}>
                      {copy.changedDocuments}
                    </span>
                    {update.documents.length > 0 ? (
                      <div className={styles.documentLinks}>
                        {update.documents.map((document) => (
                          <Link key={document.key} to={document.permalink}>
                            {document.title}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className={styles.emptyDocuments}>{copy.noDocuments}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
