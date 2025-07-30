import { Locator, Page } from "@playwright/test";

export class success
{
    page : Page;
    success : Locator;




    constructor(page:Page)
    {
        this.page = page;
        this.success = page.getByRole('button', { name: 'Continue' });


    }

    async successpage()
    {
        await this.success.click();

    }
}