//npx playwright test tests/Playwright/RightClick.spec.ts --headed

import{test, expect} from '@playwright/test';   

test('Right click on the page', async ({ page }) => {

await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
await page.waitForTimeout(3000);

await page.locator("//span[text()='right click me']").click({ button: 'right' });
await page.waitForTimeout(6000);

await page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});

await page.locator("//span[text()='Edit']").click();
await page.waitForTimeout(3000);







})