import test, { chromium, expect } from "@playwright/test";


test("Login test demo", async () => {
    const browser = await chromium.launch({ slowMo: 500, timeout: 50000 });
    const context = await browser.newContext();
    const page = await context.newPage();

    const url = "https://demo.applitools.com/index.html";

    const usernameTxt = '#username';
    const passwordTxt = '#password';
    const loginBtn = '#log-in';
    const loggedUser = '.logged-user-name'; 
    const balances = '.balance-value';


    await page.goto(url);
    await page.fill(usernameTxt, "username");
    await page.fill(passwordTxt, "password");
    await page.click(loginBtn);
    expect(page.title()).not.toBeNull();
    let userName = await page.$(loggedUser);
    expect(await userName?.innerText()).toBe('Jack Gomez');


    let balArray = await page.$$(balances);
    const total = (await balArray[0].$('span'))?.innerText();
    //expect(total).toBe('$350');

    expect(await balArray[1].innerText()).toBe('$17,800');
    expect(await balArray[2].innerText()).toBe('$180');

    const newContext = await browser.newContext();
    const page1 = await context.newPage();
    page1.waitForTimeout(3000);
    await page1.goto(url);
});