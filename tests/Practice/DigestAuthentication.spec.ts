import { test, expect } from '@playwright/test';

test('Context menu alert handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/digest_auth');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/digest_auth');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);

page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog 

    // ✅ Use proper path with double backslashes or forward slashes
    await page.screenshot({ path: 'D:/Typescript/alertmessage.png' });
    console.log('Screenshot taken');
  })







})