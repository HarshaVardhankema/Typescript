// npx playwright test tests/Playwright/singledropdown.spec.ts --headed

import { test, expect } from '@playwright/test';

test('midoc', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Single dropdown - select by index (optional)
  // await page.locator('#country').selectOption({ index: 3 });

  // Select dropdown option by value
 //await page.locator('#country').selectOption({ label: 'Germany' });

 // Select dropdown option by visible text
  await page.locator('#country').selectOption({ label: 'India' });

  // Optional wait to visually confirm the selection
  await page.waitForTimeout(3000);
});
