import ParentPage from "./parentPage.page";
import {Page} from "@playwright/test";
import URLS from "../test-data/urls.enum";

class LoginPage extends ParentPage {
    constructor(private page: Page) {
        super()
    }

    readonly form = {
        inputEmail: this.page.getByLabel('Email Address'),
        inputPassword: this.page.getByLabel('Password'),
        btnLogin: this.page.getByRole('button', {name: 'Login'})
    }

    async visit() {
        await super.visit(this.page, URLS.LOGIN)
        await super.waitForElementVisible(this.form.btnLogin)
    }

    async login(email, password) {
        await super.fillInput(this.form.inputEmail, email)
        await super.fillInput(this.form.inputPassword, password)
        await super.click(this.form.btnLogin)
    }
}

export default LoginPage;