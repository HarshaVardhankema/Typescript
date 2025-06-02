//npx playwright test tests/Playwright/JSAlert.spec.ts --headed
import { test, expect } from '@playwright/test';

test('alertsJS', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // For first alert
  page.once('dialog', async dialog => {
    console.log(dialog.message());
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept(); // Accept the alert
    console.log('Alert accepted');
  });
  await page.locator("//button[text()='Click for JS Alert']").click();

  // For second confirm alert
  page.once('dialog', async dialog => {
    console.log(dialog.message());
    expect(dialog.message()).toBe('I am a JS Confirm');
    await dialog.accept(); // Accept the alert
    const text = await page.locator('#result').textContent();
    console.log(text);
    expect(text).toBe('You clicked: Ok');
  });
  await page.locator("//button[text()='Click for JS Confirm']").click();
});
