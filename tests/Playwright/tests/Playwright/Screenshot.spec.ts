// npx playwright test tests/Playwright/Screenshot.spec.ts --headed

import{test, expect} from '@playwright/test';

test('Screenshot test', async ({page}) => {

    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(4000); // Wait for 2 seconds to ensure the page is fully loaded

     await page.screenshot({path: '01_'+Date.now() +'_screenshot.png'});


    //await page.screenshot({path: 'screenshot.png', fullPage: true});

    
});