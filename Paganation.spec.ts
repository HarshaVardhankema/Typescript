//npx playwright test tests/Playwright/Paganation.spec.ts --headed

import { test, expect } from '@playwright/test';

test('Select checkbox in Laptop row', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(3000);

  const table = page.locator('#productTable');

  // Get table headers
  const header = await table.locator('thead tr th').allTextContents();
  console.log('Table Header:', header);

  // Get number of rows
  const rows = await table.locator('tbody tr').all();
  console.log('Number of rows:', rows.length);

  // Get number of cells
  const cellCount = await table.locator('tbody tr td').count();
  console.log('Number of cells:', cellCount);

  // Get the row containing "Laptop"
  const laptopRow = table.locator('tbody tr', { hasText: 'Laptop' });
  const smartRow = table.locator('tbody tr',{hasText: 'Smartphone'});
  const TabletRow = table.locator('tbody tr', { hasText: 'Tablet' });
  const SmartwatchRow = table.locator('tbody tr', { hasText: 'Smartwatch' });
  const WireleRow = table.locator('tbody tr', { hasText: 'Wireless Earbuds' });

  // Check the checkbox within that row
  await laptopRow.locator('input[type="checkbox"]').check();
  await smartRow.locator('input[type="checkbox"]').check();
  await TabletRow.locator('input[type="checkbox"]').check();
  await SmartwatchRow.locator('input[type="checkbox"]').check();
  await WireleRow.locator('input[type="checkbox"]').check();
  await page.waitForTimeout(2000);
  

  // Wait to visually confirm
  await page.waitForTimeout(2000);
});
