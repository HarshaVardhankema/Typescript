import { test, expect } from '@playwright/test';
import { POManager } from '../POMmidoc/POManager';
import Data from '../Utilies/Data.json';


test("midocsigin", async ({ page }) => {
    
//     const username = 'Ben05@gmail.com';
//     const firstname = 'Ben';
//     const Lastname = 'Stock';
//     const Weight = "80";
//     const Feet = "6";
//     const Inches = "1";
//     const year = "2000";
//     const Month = "August";
//     const Mobile = "9887765674";
//     const OTP1 = "1";
//     const OTP2 = "2";
//     const OTP3 = "3";
//     const OTP4 = "4";
//    const  newPassword = "midoc123"
//    const  Confirmpassword = "midoc123"

    const pomanager = new POManager(page);
    const Signin = pomanager.getLogin();

    //Login page 
    await Signin.goto();
    await Signin.newemail(Data.username);

    // Personal Details 
    const details = pomanager.getPersonalDetails();
    await details.personal(Data.firstname, Data.Lastname, Data.Weight, Data.Feet, Data.Inches, Data.year, Data.Month, Data.Mobile);

    //OTP
    const OTP = pomanager.getOTPPage();
    await OTP.OneTimePassword(Data.OTP1, Data.OTP2, Data.OTP3, Data.OTP4);

    // MedicalHistory 
    const Medical = pomanager.getMedical();
    await Medical.MedicalHistory();

    //Password 
    const passwordpage = pomanager.getPassword();
    await passwordpage.Passwordpage(Data.newPassword,Data.Confirmpassword)

    //success
    const successpage = pomanager.getsuccess();
    await successpage.successpage();

    



});


