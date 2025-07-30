//npx playwright test tests/Playwright/Multipleupload.spec.ts --headed

import { test, expect } from '@playwright/test';

test('Drag and drop test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(2000);

  // Corrected file path with double backslashes
    await page.locator("#multipleFilesInput").setInputFiles(['C:\\Users\\hneth\\Downloads\\ImportedPhoto_1718020599663.jpg' , 
                            'C:\\Users\\hneth\\Downloads\\ImportedPhoto_1718020599663.jpg' ]);
     

  await page.waitForTimeout(5000);

  // Corrected locator to use Playwright syntax (XPath needs to be wrapped properly)
  await page.locator("//button[text()='Upload Multiple Files']").click();

  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'D:\\Typescript\\Multiplefiles.png' });
});
