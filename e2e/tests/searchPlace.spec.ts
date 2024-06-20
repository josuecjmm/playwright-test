import {expect, test} from "@playwright/test";
import LatitudeLongitudeFinderPage from "../pageObjects/latitudeLongitudeFinder.page";
import DEFAULT_VALUES from "../test-data/latitudeLongitude.enum";
import LoginPage from "../pageObjects/login.page";
import MyAccountPage from "../pageObjects/myAccount.page";

const {EMAIL_USERNAME, PASSWORD} = process.env;

test.describe('Latitude And Longitude Finder', () => {
    let latitudeLongitudeFinder;
    let loginPage;
    let myAccountPage;

    test.beforeEach(async ({page}) => {
        latitudeLongitudeFinder = new LatitudeLongitudeFinderPage(page)
        loginPage = new LoginPage(page)
        myAccountPage = new MyAccountPage(page)
        await loginPage.visit()
        await loginPage.login(EMAIL_USERNAME, PASSWORD)
        await expect(myAccountPage.manageYourAccount.linkLogout).toBeVisible()
        await latitudeLongitudeFinder.visit()
    });

    test('Verify you can find the latitude, longitude of a place', async () => {
        // Find the default values without using the search
        await expect(latitudeLongitudeFinder.results.textLatitudeLongitude)
            .toHaveText(DEFAULT_VALUES.LATITUDE_LONGITUDE)
        await expect(latitudeLongitudeFinder.results.textGPSLatitude)
            .toHaveText(DEFAULT_VALUES.GPS_LATITUDE)
        await expect(latitudeLongitudeFinder.results.textGPSLongitude)
            .toHaveText(DEFAULT_VALUES.GPS_LONGITUDE)
        // Searching for a place
        await latitudeLongitudeFinder.searchByName('San José, Costa Rica')
        // Now the default values should not appear anymore as the results should show
        await expect(latitudeLongitudeFinder.results.textLatitudeLongitude)
            .not.toHaveText(DEFAULT_VALUES.LATITUDE_LONGITUDE)
        await expect(latitudeLongitudeFinder.results.textGPSLatitude)
            .not.toHaveText(DEFAULT_VALUES.GPS_LATITUDE)
        await expect(latitudeLongitudeFinder.results.textGPSLongitude)
            .not.toHaveText(DEFAULT_VALUES.GPS_LONGITUDE)
    })

    test.afterEach(async () => {
        await myAccountPage.visit()
        await myAccountPage.logout()
    });
})