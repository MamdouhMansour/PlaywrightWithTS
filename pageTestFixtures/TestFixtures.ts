import {test as baseTest} from "@playwright/test";
import RegisterPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Desktops from "../pages/Desktops";


type pages={
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    desktopPage: Desktops
}

const testPages = baseTest.extend<pages>({

    registerPage: async({page}, use) => {
        await use(new RegisterPage(page));        
    },
    loginPage: async({page}, use) => {
        await use(new LoginPage(page));        
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page));        
    },
    desktopPage: async({page}, use) => {
        await use(new Desktops(page));        
    }

})

export const test = testPages;
export const expect = testPages.expect;