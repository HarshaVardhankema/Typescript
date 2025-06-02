//npx playwright test tests/Playwright/Assertions.spec.ts --headed

import { test, expect } from '@playwright/test';

test('assertion validations', async ({ page }) => {

await page.goto('https://midoc-patientapp-dev.azurewebsites.net/login');
await expect(page).toHaveURL('https://midoc-patientapp-dev.azurewebsites.net/login');
await expect(page).toHaveTitle('midoc');

await page.waitForTimeout(2000);

await (page.locator('button.chakra-button.css-1cv8wnd')).click();
await page.waitForTimeout(2000);

await expect(page.getByPlaceholder('Phone number*')).toBeEditable();
await expect(page.getByPlaceholder('Phone number*')).toBeVisible();
await expect(page.getByPlaceholder('Phone number*')).toBeEmpty();
await page.waitForTimeout(2000);














})