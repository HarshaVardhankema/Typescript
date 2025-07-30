//npx playwright test tests/Practice/DragandDrop.spec.ts --headed 

import { test, expect } from '@playwright/test';

test('Context menu alert handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/drag_and_drop');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'D:/Typescript/draganddrop01.png' });

  const source = page.locator('div.column').nth(0); //  Source element
  const target = page.locator('div.column').nth(1); //  Target element  

  await page.waitForTimeout(2000);

  await source.dragTo(target); //  Drag and drop action
  await page.waitForTimeout(2000);  

    await page.screenshot({ path: 'D:/Typescript/draganddrop02.png' });

})