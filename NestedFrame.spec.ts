// npx playwright test tests/Playwright/NestedFrame.spec.ts --headed

import { test, expect } from '@playwright/test';

test('nested frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.waitForTimeout(3000);

    await page.locator("a.analystic[href='#Multiple']").click();
    await page.waitForTimeout(2000);

    // Get the parent frame from the iframe element
    const frameElementHandle = await page.frameLocator("iframe[src='MultipleFrames.html']");
    const par_frame = await page.frame({ url: /MultipleFrames\.html/ });

    // Get the child frame (nested inside parent)
    const chid_Frame = await par_frame?.childFrames();

    // Fill the input inside the first child frame
    await chid_Frame?.[0].locator("//input[@type='text']").fill('Second Input');
    await page.waitForTimeout(2000);

});
