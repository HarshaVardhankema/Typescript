//npx playwright test tests/Playwright/DatePicker.spec.ts --headed


import{test, expect} from '@playwright/test';

test('Select date from DatePicker', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);

    await page.locator('#datepicker').click();
    await page.waitForTimeout(2000);

    await page.locator("a.ui-datepicker-prev.ui-corner-all").click();
    await page.waitForTimeout(2000);

    await page.locator("a.ui-state-default", { hasText: '26' }).click();
    await page.waitForTimeout(2000);
    

   

})
