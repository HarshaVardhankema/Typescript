
// to exceute this test, run the following command in the terminal:
// npx playwright test tests/S2D/partner.spec.ts --headed



import { test, expect } from '@playwright/test';

test('store2door', async ({ page }) => {
  await page.goto('https://store2door-partner-test.azurewebsites.net/SignIn/EmailSignIn');
  await page.waitForTimeout(3000);

  // Fix: remove the extra dot after `await`
  await page.locator('input.input-feild.emojisNotAllowed').fill('partnerdubai2023@gmail.com');
  await page.waitForTimeout(2000);
  

  await page.locator('input.input-feild.txtpassword').fill('Smsa1234');
    await page.waitForTimeout(2000);

    // Login button
    await page.locator('button.sign-in-btn.sdf').click();
    await page.waitForTimeout(5000);

    //Receipts 
    await page.waitForURL('https://store2door-partner-test.azurewebsites.net/');
    await page.waitForTimeout(5000);

    //Create Receipt
    await page.locator('a.create-receipt-btn').nth(0).click();
    await page.waitForTimeout(4000);

    // Select the camera and gallery options
    const photoUploadImg = page.locator('img[src*="photo-upload-img.png"]').nth(0);
    await photoUploadImg.click();
    await page.waitForTimeout(2000);

    //gallery 
    await page.locator('#gallery').click();


    // Upload an image (e.g., product image or ID)
   const filePath = 'C:\\Users\\hneth\\OneDrive\\Pictures\\Camera Roll\\download.jpeg';
   await page.locator("input[type='file']").setInputFiles(filePath);
   await page.waitForTimeout(3000);

   // Tracking No 
   await page.locator('input.form-control.emojisNotAllowed').nth(0).fill('NIK-4567891');
    await page.waitForTimeout(2000);

    //Package from
    await page.locator('input.form-control.emojisNotAllowed').nth(1).fill('Flipkart');
    await page.waitForTimeout(2000);

    //Suite ID 
    await page.locator('input.form-control.emojisNotAllowed').nth(2).fill('SA127240');
    await page.waitForTimeout(2000);

    // Package Weight to lb's
    await page.locator('input.form-control.numbersonly').nth(0).fill('21.90'); 
    await page.waitForTimeout(2000);

    //Dimensioal Weight to lb's
    //await page.locator('input.form-control.numbersonly').nth(1).fill('43.90');
    //await page.waitForTimeout(2000);

    //Save & Next 
    await page.locator('a.save-btn').click();
    await page.waitForTimeout(5000);

    //Item Name
    await page.locator('input.form-control.py-3.description.emojisNotAllowed').fill('Shoes');
    await page.waitForTimeout(4000);

    //selecting from dropdown 
    await page.locator('li.itemnamelist').nth(1).click();
    await page.waitForTimeout(2000);

    //Unit Price
    await page.locator('input.form-control.totalpricevalue.price.emojisNotAllowed').fill('1000');
    await page.waitForTimeout(2000);

    //Quantity
    await page.locator('input.form-control.totalpricevalue.quantity.emojisNotAllowed').fill('2');
    await page.waitForTimeout(2000);

    //Update & Next 
    await page.locator('a.save-btn').click();
    await page.waitForTimeout(5000);

   //ex:- await page.getByPlaceholder('Enter the pickup address').click();

    
//await page.get








});

