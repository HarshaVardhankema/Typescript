import { expect, Locator, Page } from "@playwright/test";


export class Password 
{
    page : Page;
    newpassword : Locator;
    Confirmpassword : Locator;
    passcontinuebutt : Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.newpassword = page.locator('.chakra-input.css-1du7rsv').first();
        this.Confirmpassword = page.locator('.chakra-input.css-1rsaweq').first();
        this.passcontinuebutt = page.locator('.chakra-button.css-zk5ooc').first();





    }

    async Passwordpage(newPassword: string, Confirmpassword: string)
    {

        await this.newpassword.fill(newPassword);
        expect(this.newpassword).toHaveValue(newPassword);//asserations
        await this.Confirmpassword.fill(Confirmpassword);
        expect(this.Confirmpassword).toHaveValue(Confirmpassword);//asseration
        await this.passcontinuebutt.click();


    }
}