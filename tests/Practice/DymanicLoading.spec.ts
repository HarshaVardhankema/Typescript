// npx playwright test tests/Practice/DymanicLoading.spec.ts --headed 

import { test, expect } from '@playwright/test';

test('Dynamic loading ', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  await expect(page).toHaveTitle('The Internet');

  // Click on Example 1 link
  await page.locator('a[href="/dynamic_loading/1"]').click();

  // Click the Start button
  await page.locator('button').click();

  // Wait for the "Hello World!" text to appear
  const helloText = page.locator('#finish h4');
  await expect(helloText).toHaveText('Hello World!');

  console.log('Text content:', await helloText.textContent());

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading');

  await page.locator('a[href="/dynamic_loading/2"]').click();

  await page.locator('button').click();
  const helloText1 = page.locator('#finish h4');
  await page.waitForTimeout(2000);
  await expect(helloText1).toHaveText('Hello World!');

  console.log('Text content1:', await helloText.textContent());




});
