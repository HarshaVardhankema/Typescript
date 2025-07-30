import { expect, Locator, Page } from "@playwright/test";

export class Signin {
    page: Page;
    email: Locator;
    continuebutt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('.chakra-input.css-dhzvz6');
        this.continuebutt = page.locator('.chakra-button.css-12kaf87');
    }

    async goto() {
        await this.page.goto("https://midoc-patientapp-dev.azurewebsites.net/login");
    }

    async newemail(username: string) {
        await this.email.fill(username);
        await expect(this.email).toHaveValue(username);//Asserations
        await this.continuebutt.click();
       await  expect(this.continuebutt).toBeVisible();//Asserations
    }
}
