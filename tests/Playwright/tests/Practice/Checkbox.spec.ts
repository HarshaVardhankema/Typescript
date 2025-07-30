//npx playwright test tests/Practice/Checkbox.spec.ts --headed

import { test , expect, firefox } from '@playwright/test';

test('Checkbox', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');

    await page.waitForTimeout(2000);
    await page.goto('https://the-internet.herokuapp.com/checkboxes');   
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
    await expect(page).toHaveTitle('The Internet');
    await page.waitForTimeout(2000);

        await page.locator('input[type="checkbox"]').nth(0).check();
        await page.waitForTimeout(2000);

        await page.locator('input[type="checkbox"]').nth(1).uncheck();
        await page.waitForTimeout(2000);
        await page.screenshot({path: 'D:\Typescript\screenshot.png'});
        await page.waitForTimeout(2000);

        close: async () => {
            await page.close();
        }








})  