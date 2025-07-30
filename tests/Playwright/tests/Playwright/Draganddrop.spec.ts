 // npx playwright test tests/Playwright/Draganddrop.spec.ts --headed
import {test, expect} from '@playwright/test';

test('Drag and drop test', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000);

  const source =   await page.locator("div#draggable");
     const target = await page.locator("div#droppable");
    await page.waitForTimeout(2000);

    await source.dragTo(target); // Perform drag and drop action
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'D:\Typescript\draganddrop.png' }); // Take screenshot after drag and drop



});