import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  // testDir: './tests/playwright',

  testMatch: ["pagetests/addtocart.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?route=",
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 500
    }
  },
  
  projects:[

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  retries: 0,
  reporter: [['json', { outputFile: 'JsonReports/report.json' }],
  ['dot', { outputFile: 'DotReports/report.dot' }],
  ['html', { outputFile: 'HTMLReports/report.html', open: 'never' }]]
};

export default config;