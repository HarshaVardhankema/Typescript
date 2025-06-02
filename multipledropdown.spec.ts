// npx playwright test tests/Playwright/multipledropdown.spec.ts --headed

import {test, expect} from '@playwright/test';

test('midoc', async ({page}) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator("#colors").selectOption(['Red', 'Green', 'Blue']);
  await page.waitForTimeout(4000);

  
});