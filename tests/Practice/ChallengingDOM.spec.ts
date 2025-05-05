//npx playwright test tests/Practice/ChallengingDOM.spec.ts --headed

import { test, expect } from '@playwright/test';

test('ChallengingDOM', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);

  await page.goto('https://the-internet.herokuapp.com/challenging_dom');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
  await page.waitForTimeout(2000);

  // ✅ Use corrected path here
  await page.screenshot({ path: 'D:/Typescript/ChallengingDOM.png' });
  await page.waitForTimeout(2000);

  await page.click('tr:nth-of-type(1) td:last-child a[href="#edit"]');
  console.log('Edit button clicked');

  // Print first table row text to the console
  const firstRowText = await page.locator('table tbody tr').first().innerText();
  console.log('First table row text:', firstRowText);

});
