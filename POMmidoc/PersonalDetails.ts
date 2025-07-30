import { expect, Locator, Page } from "@playwright/test";

export class PersonalDetails {
    page: Page;
    firstname: Locator;
    Lastname: Locator;
    Gender: Locator;
    Female: Locator;
    Weight: Locator;
    Feets : Locator;
    Inches: Locator;
    DOB: Locator;
    year:Locator;
    Month:Locator;
    Day:Locator;
    Mobile:Locator;
    Continuebutton : Locator;






    constructor(page: Page) {
        this.page = page;
        this.firstname = page.locator("[class='chakra-input css-2e40ac']").first();
        this.Lastname = page.locator(".chakra-input.css-8fw5pz").first();
        this.Gender = page.locator('.chakra-input.css-1qyemv2').first();
        this.Female = page.locator('.chakra-menu__menuitem.css-18esm8n').nth(1);
        this.Weight = page.locator("#weight").first();
        this.Feets = page.locator("#height").first();
        this.Inches = page.locator("#height").nth(1);
        this.DOB = page.getByPlaceholder("Date of Birth*").first();
        this.year = page.locator("[name='years']");
        this.Month = page.locator("[name='months']");
        this.Day =page.locator("[name='day']").nth(19);
        this.Mobile = page.getByPlaceholder("Phone number*").first();
        this.Continuebutton = page.locator('#submitButton').first();



    }

    async personal(firstname: string, Lastname: string, Weight: any, Feet: any, Inches: any, year: any, Month: string, Mobile: string)
     {
        await this.firstname.fill(firstname);
       await expect(this.firstname).toHaveValue(firstname)//asseration
        await this.Lastname.fill(Lastname);
        await expect(this.Lastname).toHaveValue(Lastname)//asseration
        await this.Gender.click();
        await this.Female.click();
       await expect(this.Female).toContainText('Female')//asseration
        await expect(this.Gender).toHaveValue('Female');//asseration
        await this.Weight.fill(Weight);
        await this.Feets.fill(Feet);
        await expect(this.Feets).toHaveValue(Feet);
        await this.Inches.fill(Inches);
        await expect(this.Inches).toHaveValue(Inches)
        await this.DOB.click();
        await this.year.selectOption(year);
        await this.Month.selectOption(Month);
        await this.Day.click();
        await this.Mobile.fill(Mobile);
        await expect (this.Mobile).toHaveValue(Mobile)
        await this.Continuebutton.click();




    }
}
