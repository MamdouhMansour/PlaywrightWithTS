import { expect, test } from "../pageTestFixtures/TestFixtures";
import * as data from "../pages-test-data/test_data.json";

test.describe("test demo pom", async () => {
    test("Register Test_01", async ({ page, baseURL, registerPage }) => {
        await page.goto(`${baseURL}account/register`);

        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterPhone(data.phonenumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        await registerPage.checkAgreePolicy();
        await registerPage.clickContinueRegister();

    })

    test("Login Test_02", async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}account/login`);
        await loginPage.login(data.email, data.password);
        expect(await page.title()).toBe("My Account");
    })


    test("Add To Cart Test_03", async ({ page, baseURL, loginPage, homePage, desktopPage }) => {
        await page.goto(`${baseURL}account/login`);
        await loginPage.login(data.email, data.password);
        await page.goto(`${baseURL}common/home`);
        await homePage.clickOnDesktop();
        await desktopPage.hoverOverItem();
        await desktopPage.addItemToCart();
        expect(await desktopPage.isToastVisible()).toBeInViewport();
        page.waitForLoadState("networkidle");
    })
})
