// npx playwright test tests/midoc/midoc.spec.ts --headed

import { test, expect } from '@playwright/test'

test('midoc', async ({ page }) => {
    await page.goto('https://midoc-provider-dev.azurewebsites.net/login')
    await page.waitForTimeout(3000);
    await page.locator('input.chakra-input.css-rlygj7').nth(0).fill('zampa@gmail.com');
    await page.waitForTimeout(2000)
    await page.locator('input.chakra-input.css-efg1n9').nth(0).fill("midoc123")
    await page.waitForTimeout(2000)
    await page.locator('button.chakra-button.css-1gt1si2').nth(0).click;
    await page.waitForTimeout(4000)




    
})
