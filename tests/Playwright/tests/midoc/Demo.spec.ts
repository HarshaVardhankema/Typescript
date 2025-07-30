import { test, expect } from '@playwright/test';

test('midoc', async ({ page }) => {
  await page.goto('https://midoc-patientapp-dev.azurewebsites.net/login');
  await page.waitForURL('**/login*'); // ← Flexible and avoids URL mismatch error

await page.locator('input.chakra-input.css-dhzvz6').fill('zampa@gmail.com')
await page.waitForTimeout(2000)

await page.locator('button.chakra-button.css-12kaf87').click()
await page.waitForTimeout(5000)










});
