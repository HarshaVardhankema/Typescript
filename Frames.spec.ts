//npx playwright test tests/Playwright/Frames.spec.ts --headed

import{test, expect} from '@playwright/test';
import { count } from 'console';
test('frames', async ({page}) => {
  
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await page.waitForTimeout(2000);

  // const frms =  await page.frames()
  // console.log('count:::' + frms.length);

    // Access the first frame

 // const myframe= await page.frame("//frame[@src='frame_1.html']")  // method 1 

  //const myframe = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });// second method
   //await myframe?.fill("//input[@name='mytext1']", 'Hello from the first frame');
    //await page.waitForTimeout(2000);

  const textframe = await page.frameLocator("//frame[@src='frame_1.html']")
                                       .locator("//input[@name='mytext1']")
  await textframe.fill('Hello from the first frame');
  await page.waitForTimeout(2000);


    

  

    // Access the second frame
  // const secondframe = await page.locator("//input[@name='mytext2']").fill('Hello from the second frame');

//    //Access the third frame
//      const thirdframe = await page.locator("//input[@name='mytext3']").fill('Hello from the third frame');
//     await page.waitForTimeout(2000);

//     //Access the fourth frame
//     const fourthframe = await page.locator("//input[@name='mytext4']").fill('Hello from the fourth frame');
//     await page.waitForTimeout(2000);    

//     //Access the fifth frame
//     const fifthframe = await page.locator("//input[@name='mytext5']").fill('Hello from the fifth frame');
//     await page.waitForTimeout(2000);


//     console.log(firstfrmae, secondframe, thirdframe, fourthframe, fifthframe);


    

});