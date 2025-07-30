 // npx playwright test tests/Playwright/Hooks.spec.ts --headed

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log("Before each test");
});

test.afterEach(async ({ page }) => {
  console.log("After each test");
});

test('Hooks test 1', async ({ page }) => {
  console.log("Hooks1");
});

test('Hooks test 2', async ({ page }) => {
  console.log("Hooks2");
});

test('Hooks test 3', async ({ page }) => {
  console.log("Hooks3");
});
