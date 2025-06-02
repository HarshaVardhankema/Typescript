// npx playwright test tests/Playwright/doubleclick.spec.ts --headed

import {test, expect} from '@playwright/test';

test('Double click on the page', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);

   await page.locator("#field1").dblclick();
    await page.waitForTimeout(5000);

    const value = await page.locator("#field1").inputValue();
    expect(value).toBe("Hello World!"); // Assuming the input field is set to "Hello World!" after double click
    console.log("Double click action performed successfully, value is: " + value);
    await page.screenshot({ path: 'doubleclick.png' });

});
