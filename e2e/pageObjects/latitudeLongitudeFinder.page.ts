import ParentPage from "./parentPage.page";
import {Page} from "@playwright/test";
import URLS from "../test-data/urls.enum";

class LatitudeLongitudeFinderPage extends ParentPage {
    constructor(private page: Page) {
        super()
    }

    readonly formSearchNameLatitudeLongitude = {
        inputPlaceName: this.page.getByPlaceholder('Type a place name'),
        inputLatitude: this.page.getByPlaceholder('lat coordinate'),
        inputLongitude: this.page.getByPlaceholder('long coordinate'),
        btnFind: this.page.getByRole('button', {name: 'Find'})
    }

    readonly results = {
        textLatitudeLongitude: this.page.locator('#latlngspan'),
        textGPSLatitude: this.page.locator('#dms-lat'),
        textGPSLongitude: this.page.locator('#dms-lng'),
    }

    async visit() {
        await super.visit(this.page, URLS.LATITUDE_LONGITUDE_FINDER)
        await super.waitForElementVisible(this.formSearchNameLatitudeLongitude.btnFind)
    }

    async searchByName(name: string): Promise<void> {
        await super.fillInput(this.formSearchNameLatitudeLongitude.inputPlaceName, name)
        await super.click(this.formSearchNameLatitudeLongitude.btnFind)
    }
}

export default LatitudeLongitudeFinderPage;