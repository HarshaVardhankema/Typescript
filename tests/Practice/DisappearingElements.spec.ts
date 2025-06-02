// npx playwright test tests/Practice/DisappearingElements.spec.ts --headed

import { test, expect } from '@playwright/test';

test('Detecting disappering links', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');

  await page.waitForTimeout(2000);
  await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/disappearing_elements');
  await expect(page).toHaveTitle('The Internet');
  await page.waitForTimeout(2000);

  let found = false;
  const maxAttempts = 10;

  for (let i = 0; i < maxAttempts; i++) {
    console.log(' Reload attempt #${i}');
    const gallery = page.locator('a', { hasText: 'Gallery' });

    if (await gallery.count() > 0) {
      console.log( 'Gallery' )
      await page.screenshot({ path: 'D:/Typescript/gallery_found_${i}.png' });
      found = true;
      break;
    }

    await page.reload();
    await page.waitForTimeout(500); // wait a bit between reloads
  }

  if (!found) {
    console.log( 'Gallery link not found after ${maxAttempts} reloads') }




})