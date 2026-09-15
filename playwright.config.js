const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './test',

    use: {
        baseURL: 'http://localhost:3000/jimmer-doc/',
    },

    webServer: {
        command: 'yarn start --port 3000',
        url: 'http://localhost:3000/jimmer-doc/',
        reuseExistingServer: !process.env.CI,
    },
});