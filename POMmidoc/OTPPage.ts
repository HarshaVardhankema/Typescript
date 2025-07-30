import { Locator, Page } from "@playwright/test"

export class OTPPage {
    page: Page;
    OTPOne: Locator;
    OTPTwo: Locator;
    OTPThree: Locator;
    OTPFour: Locator;
    OTPContinue:Locator;


    constructor(page) {

        this.page = page;
        this.OTPOne =  page.locator("#pin1-0");
        this.OTPTwo = page.locator("#pin1-1");
        this.OTPThree = page.locator("#pin1-2");
        this.OTPFour = page.locator("#pin1-3");
        this.OTPContinue =page.locator('.chakra-button.css-12kaf87');

    }

    async OneTimePassword(OTP1: string, OTP2: string, OTP3: string, OTP4: string)
    {
        await this.OTPOne.fill(OTP1);
        await this.OTPTwo.fill(OTP2);
        await this.OTPThree.fill(OTP3);
        await this.OTPFour.fill(OTP4);
        await this.OTPContinue.click();

    }
}