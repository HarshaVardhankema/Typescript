//npx playwright test tests/Practice/AddRemoveElements.spec.ts --headed

import {test , expect} from '@playwright/test';

test('Add and remove elements', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet'); 
    await page.waitForTimeout(2000);

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');

    const button = page.locator('button[onclick="addElement()"]');
    await button.click();
    await page.waitForTimeout(2000);
    
    await page.locator('button.added-manually').nth(0).click();
    await page.waitForTimeout(2000);



})
