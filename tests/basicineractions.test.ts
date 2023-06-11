import { test, expect } from "@playwright/test";

test("message input test", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/simple-form-demo";
    await page.goto(url);
    const messageInput = page.locator('input#user-message');
    await messageInput.scrollIntoViewIfNeeded();
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log(await messageInput.inputValue());
    await messageInput.type("mamdouh mansour");
    console.log(await messageInput.inputValue());
    expect(await messageInput.inputValue()).toBe("mamdouh mansour");
});


test("Sum values", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/simple-form-demo";
    await page.goto(url);
    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");
    const getValuesBtn = page.locator("//button[text()='Get values']");
    const summValue = page.locator("#addmessage");
    await sum1.type("15");
    await sum2.type("20");
    await getValuesBtn.click();
    expect(await summValue.innerText()).toBe("35");

});

test("checkbox", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/checkbox-demo";
    await page.goto(url);
    const singleCheckBox = page.locator("#isAgeSelected");
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();
});


test("check all boxes", async ({ page }) => {
    const url = "https://www.lambdatest.com/selenium-playground/checkbox-demo";
    await page.goto(url);
    const checkUncheckAll = page.locator("#box");

    let checkboxes = await page.$$("//input[contains(@id,'ex1-check')]");

    expect(await checkUncheckAll.getAttribute("value")).toBe("check all");
    // checkboxes.forEach(async element => {
    //     await element.check();
    //     await page.waitForTimeout(2000)
    // });
    console.log("#####" + await checkUncheckAll.getAttribute("value"));
    await checkUncheckAll.click();
    await page.waitForTimeout(2000);
    console.log("#####" + await checkUncheckAll.getAttribute("value"));
    expect(await checkUncheckAll.getAttribute("value")).toBe("uncheck all");
});