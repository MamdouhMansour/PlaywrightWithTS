import { Page } from "@playwright/test";

export default class LoginPage {

    constructor(public page: Page) {

    }

    async login(email: string, password: string) {
        await this.page.locator("#input-email").type(email);
        await this.page.locator("#input-password").type(password);
        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.page.click("input[value='Login']")
        ]);
    }
}