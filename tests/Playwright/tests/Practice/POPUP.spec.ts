////npx playwright test tests/Practice/POPUP.spec.ts --headed

import {test , firefox, expect} from '@playwright/test';

test('Auth POPUP', async ({ page }) => {
    const browser = await firefox.launch();
    const context = await browser.newContext({
        httpCredentials: {
          username: 'admin',
          password: 'admin'
        }
    });

await page.goto('https://the-internet.herokuapp.com/');
await expect (page).toHaveURL('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle('The Internet');
await page.waitForTimeout(2000);

await  page.goto('https://the-internet.herokuapp.com/basic_auth');

// Optional: validate the login
await page.waitForSelector('text=Congratulations');
await expect(page.locator('text=Congratulations')).toBeVisible();


})