//npx playwright test tests/Playwright/Autosuggestdropdown.spec.ts --headed

import {test, expect} from '@playwright/test';

test('autosuggest dropdown', async ({page}) => {
  await page.goto('https://www.redbus.in/');
await page.waitForTimeout(2000);
// Click on the source input field
const input = page.locator('#src').fill('Hyderabad');
//await input.click();
//await input.fill('Hyderabad');
// Wait for the autosuggest dropdown to appear  
await page.waitForTimeout(2000);
// Select the first option from the autosuggest dropdown
const option = page.locator("//text[@class='placeHolderMainText' and text()='Hyderabad']");
await option.click();
await option.textContent();
console.log(await option.textContent());
// Verify that the selected option is now in the input field
await page.waitForTimeout(2000);



// //input[@id='src']
  //div.sc-gZMcBi.hviMLb >.placeHolderMainText --srisalam css 

  
});