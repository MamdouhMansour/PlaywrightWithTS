import { Page } from "@playwright/test";

export default class Desktops {

    constructor(public page: Page) {

    }

    async hoverOverItem() {
        await this.page.locator("//img[@class='lazy-load']").nth(0).hover();
    }

    async addItemToCart() {
        await this.page.locator("//button[contains(@class,'btn btn-cart')]").nth(0).click();
    }

    async isToastVisible() {
        const toast = this.page.locator("//a[.='View Cart ']");
        await toast.waitFor({ state: "visible" });
        return toast;
    }
}