//  npx playwright test tests/Playwright/GroupTest.spec.ts --headed

import {test, expect} from '@playwright/test';

test.describe.skip('Group Tests', () => {

test('Group test 1', async () => {
  console.log("Group1");
});

test('Group test 2', async () => {
  console.log("Group2");
});

test('Group test 3', async () => {
  console.log("Group3");
});

});


test.describe('Group two', () => {

test('Group test 4', async () => {
  console.log("Group4");
});

test('Group test 5', async () => {
  console.log("Group5");
});

});