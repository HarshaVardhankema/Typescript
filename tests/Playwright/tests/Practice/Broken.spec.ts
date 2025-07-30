//npx playwright test tests/Practice/Broken.spec.ts --headed

import { test, expect, firefox} from '@playwright/test';

test('BrokenImage', async ({ page }) => {


    await page.goto('https://the-internet.herokuapp.com/');
await expect (page).toHaveURL('https://the-internet.herokuapp.com/');
await expect(page).toHaveTitle('The Internet');
await page.waitForTimeout(2000);

await page.goto('https://the-internet.herokuapp.com/broken_images');
await expect (page).toHaveURL('https://the-internet.herokuapp.com/broken_images');
await page.waitForTimeout(2000);

await page.screenshot({path: 'D:\Typescript\screenshot.png'});

await page.waitForTimeout(2000);


})

