import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Desktops from "../pages/Desktops";

const email = "mamdouh1@gmail.com";
const password = "Aa123456";


test("Register Test_01", async ({ page, baseURL }) => {
    const register = new RegisterPage(page);
    await page.goto(`${baseURL}account/register`);

    await register.enterFirstName("Mamdouh");
    await register.enterLastName("Mansour");
    await register.enterEmail(email);
    await register.enterPhone("+201095033921");
    await register.enterPassword(password);
    await register.enterConfirmPassword(password);
    await register.checkAgreePolicy();
    await register.clickContinueRegister();

})

test("Login Test_02", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}account/login`);
    await login.login(email, password);
    expect(await page.title()).toBe("My Account");
})


test("Add To Cart Test_03", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const desktops = new Desktops(page);

    await page.goto(`${baseURL}account/login`);
    await login.login(email, password);
    await page.goto(`${baseURL}common/home`);
    await home.clickOnDesktop();
    await desktops.hoverOverItem();
    await desktops.addItemToCart();
    expect(await desktops.isToastVisible()).toBeInViewport();
    page.waitForLoadState("networkidle");
})
