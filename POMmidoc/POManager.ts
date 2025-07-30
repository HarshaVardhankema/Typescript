import { Page } from "@playwright/test";
import { Signin } from "./Signin";
import { PersonalDetails } from "./PersonalDetails";
import { OTPPage } from "./OTPPage";
import { Medical } from "./Medical";
import { Password } from "./Password";
import { success } from "./success";

export class POManager {
    page: Page;
    login: Signin;
    PersonalDetails: PersonalDetails;
    OTPPage: OTPPage;
    Medical: Medical;
    Password: Password;
    success: success;

    constructor(page: Page) {
        this.page = page;
        this.login = new Signin(this.page);
        this.PersonalDetails = new PersonalDetails(this.page);
        this.OTPPage = new OTPPage(this.page);
        this.Medical = new Medical(this.page);
        this.Password = new Password(this.page);
        this.success = new success(this.page);
    }

    getLogin(): Signin {
        return this.login;
    }

    getPersonalDetails(): PersonalDetails {
        return this.PersonalDetails;
    }

    getOTPPage(): OTPPage {
        return this.OTPPage;
    }

    getMedical(): Medical {
        return this.Medical;
    }

    getPassword(): Password {
        return this.Password;
    }

    getsuccess(): success {
        return this.success;
    }
}
