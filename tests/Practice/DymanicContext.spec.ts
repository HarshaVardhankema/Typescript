



//npx playwright test tests/Practice/DymanicContext.spec.ts --headed 

import { test, expect } from '@playwright/test';

test('Context menu alert handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/dynamic_content?with_content=static');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_content?with_content=static');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);

  const Contextbefore = page.locator('div.large-10.columns.large-centered').innerText(); //  Source element
  await page.screenshot({ path: 'D:/Typescript/dynamiccontext01.png' });    

  await page.reload(); //  Reload the page
  await page.waitForTimeout(2000);

    const Contextafter = page.locator('div.large-10.columns.large-centered').innerText(); //  Source element
    await page.screenshot({ path: 'D:/Typescript/dynamiccontext02.png' });

    await page.waitForTimeout(2000);

    console.log('Context before reload:', Contextbefore); //  Source element
    console.log('Context after reload:', Contextafter); //  Source element
    console.log('Are the contexts different?', Contextbefore !== Contextafter); //  Source element
    console.log('Are the contexts equal?', Contextbefore === Contextafter); //  Source element
    console.log('Are the contexts equal?', Contextbefore == Contextafter); //  Source element
    
  

})