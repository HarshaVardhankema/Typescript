//npx playwright test tests/Practice/Dymanicontrol.spec.ts --headed 

import { test, expect } from '@playwright/test';

test('Dynamic Controls test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // Remove checkbox
  await page.locator('button:has-text("Remove")').click();
  await expect(page.locator('#message')).toHaveText('It\'s gone!');

  // Add checkbox back
  await page.locator('button:has-text("Add")').click();
  await expect(page.locator('#message')).toHaveText('It\'s back!');

  // Enable input field
  await page.locator('button:has-text("Enable")').click();
  await expect(page.locator('#message')).toHaveText('It\'s enabled!');
  await page.locator('input[type="text"]').fill('Playwright works!');

  // Disable input field
  await page.locator('button:has-text("Disable")').click();
  await expect(page.locator('#message')).toHaveText('It\'s disabled!');
});
