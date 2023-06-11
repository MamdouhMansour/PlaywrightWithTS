import { Page } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) {

    }

    async clickOnDesktop() {
        await this.page.click("//img[@alt='Desktops']");

    }

    async hoverOverMyAccount() {
        await this.page.hover("//span[text()[normalize-space()='My account']]");
    }

    async clickLogoutBtn() {
        await this.page.click("//a[contains(.,'Logout')]");
    }

}