// npx playwright test tests/Playwright/NewTab.spec.ts --headed 

import { test, expect } from "@playwright/test";

test('New Tab in Same Browser Window', async ({ browser }) => {
    // Create a new browser context
    const context = await browser.newContext();

    // Open the first tab
    const page = await context.newPage();
    await page.goto('https://www.google.co.in/');
    await expect(page).toHaveTitle('Google');

});

test('New Tab in Same Browser Window - Second Tab', async ({ browser }) => {
    // Create a new browser context
    const context = await browser.newContext();

  

    // Open a second tab in the same browser context
    const newTab = await context.newPage();
    await newTab.goto('https://www.youtube.com/');

    // Perform actions in both tabs if needed
    // console.log('First tab URL:', page.url());
    console.log('Second tab URL:', newTab.url());

    // Keep both tabs open for further actions
});