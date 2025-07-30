//npx playwright test tests/Playwright/Annotations.spec.ts --headed

import{test, expect} from '@playwright/test';

test('Annotations', async ({  }) => {
console.log('Annotations test One');

});

test.only('Annotationsone', async ({  }) => {
console.log('Annotations test two');

});

test.skip('AnnotationsThree', async ({  }) => {
console.log('Annotations test Three');

});