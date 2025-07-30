import { Locator, Page } from "@playwright/test";

export class Medical
{
    page:Page;
    BloodOption : Locator;
    OpositiveBlood : Locator;
    Covid : Locator;
    Yes : Locator;
    condition : Locator;
    Anixety : Locator;
    conditionbutt :Locator;
    Allergy :Locator;
    Actinic  : Locator
    allergybutt : Locator;
    continuebutt : Locator;



    constructor(page:Page)
    {

        this.page = page;
        this.BloodOption =page.locator(".chakra-input.css-yh6dec").first();
        this.OpositiveBlood = page.locator('.chakra-menu__menuitem.css-18esm8n').nth(6);
        this.Covid = page.locator(".chakra-input.css-h1wl9e").first();
        this.Yes = page.locator(".chakra-menu__menuitem.css-18esm8n").nth(8);
        this.condition = page.locator('.chakra-text.css-5y93pu').first();
        this.Anixety = page.locator('.chakra-text.css-19tjhjv').first();
        this.conditionbutt = page.locator('.chakra-button.css-zk5ooc').nth(4);
        this.Allergy = page.locator('.css-1ee9r1r').first();
        this.Actinic = page.getByText('Actinic Prurigo');
        this.allergybutt = page.locator('.chakra-button.css-zk5ooc').nth(4);
        this.continuebutt = page.locator("[class*='chakra-button css-1cv8wnd']").first();








    }

    async MedicalHistory()
    {
        await this.BloodOption.click();
        await this.OpositiveBlood.click();
        await this.Covid.click();
        await this.Yes.click();
        await this.condition.click();
        await this.Anixety.click();
        await this.conditionbutt.click();
        await this.Allergy.click();
        await this.Actinic.click();
        await this.allergybutt.click();
        await this.continuebutt.click();






    }
}