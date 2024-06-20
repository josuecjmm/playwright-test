import ParentPage from "./parentPage.page";
import {Page} from "@playwright/test";
import URLS from "../test-data/urls.enum";

class MyAccountPage extends ParentPage {
    constructor(private page: Page) {
        super()
    }

    readonly manageYourAccount = {
        linkLogout: this.page.getByRole('link', { name: 'Logout Logout' })
    }

    async visit(): Promise<void> {
        await super.visit(this.page, URLS.MY_ACCOUNT)
        await super.waitForElementVisible(this.manageYourAccount.linkLogout)
    }

    async logout(): Promise<void> {
        await super.click(this.manageYourAccount.linkLogout)
        await super.waitForElementToDisappear(this.manageYourAccount.linkLogout)
    }
}

export default MyAccountPage;