import {expect, test} from "@playwright/test";
import LoginPage from "../pageObjects/login.page";
import MyAccountPage from "../pageObjects/myAccount.page";
const {EMAIL_USERNAME, PASSWORD} = process.env;

test.describe('Login', () => {
    let loginPage;
    let myAccountPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        myAccountPage = new MyAccountPage(page)
        await loginPage.visit()
    });

    test('Verify you can do positive login', async () => {
        await loginPage.login(EMAIL_USERNAME, PASSWORD)
        await expect(myAccountPage.manageYourAccount.linkLogout).toBeVisible()
        await myAccountPage.logout()
    })

    test('Verify you can do a negative login', async () => {
        await loginPage.login('wrong_email', '1234')
        await expect(myAccountPage.manageYourAccount.linkLogout).not.toBeVisible()
    })
})