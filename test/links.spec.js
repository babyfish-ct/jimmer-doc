const { test, expect } = require('@playwright/test');

const ORIGIN = 'http://localhost:3000';
const BASE_PATH = '/jimmer-doc';
const DOCS_PATH = `${BASE_PATH}/docs`;

async function waitForHydration(page) {
    await page.locator('html[data-has-hydrated="true"]').waitFor({
        state: 'attached',
        timeout: 10_000,
    });
}

test('all internal documentation links are reachable', async ({ page }) => {
    const queue = [`${DOCS_PATH}/overview/introduction`];
    const visited = new Set();
    const broken = [];

    while (queue.length > 0) {
        const current = queue.shift();

        if (visited.has(current)) {
            continue;
        }

        visited.add(current);

        console.log(`[PAGE] ${current}`);

        const response = await page.goto(
            `${ORIGIN}${current}`,
            { waitUntil: 'domcontentloaded' },
        );

        if (!response || !response.ok()) {
            broken.push({
                target: current,
                reason: `HTTP ${response?.status() ?? 'NO_RESPONSE'}`,
            });
            continue;
        }

        await waitForHydration(page);

        // Docusaurus 404 페이지는 article이 없을 수 있다.
        const article = page.locator('article');

        if (await article.count() === 0) {
            broken.push({
                target: current,
                reason: 'Documentation page not found',
            });

            console.error(`       BROKEN: ${current}`);
            continue;
        }

        const links = await article.locator('a[href]').evaluateAll(
            (anchors) =>
                anchors.map((a) => ({
                    raw: a.getAttribute('href'),
                    absolute: a.href,
                })),
        );

        console.log(`       ${links.length} article links`);

        for (const { raw, absolute } of links) {
            if (!raw || !absolute) {
                continue;
            }

            let url;

            try {
                url = new URL(absolute);
            } catch {
                continue;
            }

            // 외부 링크 제외
            if (url.origin !== ORIGIN) {
                continue;
            }

            // docs 외부 링크 제외
            if (
                url.pathname !== DOCS_PATH &&
                !url.pathname.startsWith(`${DOCS_PATH}/`)
            ) {
                continue;
            }

            let target = url.pathname;

            // /foo와 /foo/를 동일한 문서로 취급
            if (target.length > DOCS_PATH.length) {
                target = target.replace(/\/+$/, '');
            }

            if (!visited.has(target) && !queue.includes(target)) {
                queue.push(target);
            }
        }
    }

    console.log(`\nChecked ${visited.size} documentation pages`);

    if (broken.length > 0) {
        console.error('\nBroken documentation links:\n');

        for (const item of broken) {
            console.error(
                `${item.reason}: ${item.target}`,
            );
        }
    }

    expect(
        broken,
        `${broken.length} broken documentation link(s) found`,
    ).toEqual([]);
});