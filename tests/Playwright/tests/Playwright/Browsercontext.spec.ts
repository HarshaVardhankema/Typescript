// npx playwright test tests/Playwright/Browsercontext.spec.ts --headed

import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';

test('Browser Context Tests', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  await page.goto('https://www.google.com');
 // await expect(page).toHaveTitle('Google');

await page.waitForTimeout(2000);


  const browser1: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context1: BrowserContext = await browser1.newContext();
  const page1: Page = await context.newPage();

  await page1.goto('https://www.flipkart.com/');
  //await expect(page).toHaveTitle('Google');

await page.waitForTimeout(2000);
});
