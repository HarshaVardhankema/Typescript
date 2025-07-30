//npx playwright test tests/Playwright/Mouseaction.spec.ts --headed

import{test, expect} from '@playwright/test';   

test('Mouse action on the page', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(3000);

   const mouse =  await page.locator("//a [text()='Home']").nth(2);
    await mouse.hover();

    await page.waitForTimeout(5000);


    
});