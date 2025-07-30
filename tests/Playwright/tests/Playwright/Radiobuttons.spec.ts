//npx playwright test tests/Playwright/Radiobuttons.spec.ts --headed


import { test, expect } from '@playwright/test';

test('midoc', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

 /* const element = page.locator("//*[text()='Male']");
  await element.click();
  await expect(element).toBeChecked();

  */

  const checkbox = [
    "//*[text()='Male']",
    "//*[text()='Female']"
  ];

  for (const element of checkbox) {
    await page.locator(element).check();
    await expect(page.locator(element)).toBeChecked();
    await page.waitForTimeout(1000);
  }
 // await page.waitForTimeout(6000);
});
