import { test, expect } from '@playwright/test';

test('Context menu alert handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);

  //  Register dialog handler BEFORE clicking
  page.on('dialog', async (dialog) => {
    console.log('Alert message:', dialog.message());
    await dialog.accept();

    //  Use proper path with double backslashes or forward slashes
    await page.screenshot({ path: 'D:/Typescript/alertmessage.png' });
    console.log('Screenshot taken');
  });

  //  Now perform the right-click (after setting up dialog handler)
  await page.locator('#hot-spot').click({ button: 'right' });
  await page.waitForTimeout(2000);
});
