import { expect, test } from "@playwright/test";

test("handling alerts0", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (dialog) => {
        const text = dialog.message();
        expect(text).toBe("I am an alert box!");
        dialog.accept();
    });

    await page.locator("button:has-text('Click Me')").nth(0).click();
});



test("handling alerts1", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (dialog) => {
        const text = dialog.message();
        expect(text).toBe("Press a button!");
        dialog.dismiss();
    });

    await page.locator("button:has-text('Click Me')").nth(1).click();

    expect(page.locator("#confirm-demo")).toContainText("Cancel!");
});

test("handling alerts2", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (dialog) => {
        const text = dialog.defaultValue();
        dialog.accept("Mamdouh");
    });

    await page.locator("button:has-text('Click Me')").nth(2).click();

    expect(page.locator("#prompt-demo")).toContainText("'Mamdouh' !");
});


test("handling bootstrap modal", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

    await page.locator("//button[@data-target='#myMultiModal']").click();
    await page.locator("//button[@data-target='#mySecondModal']").click();
    await page.locator("(//button[text()='Save Changes'])[3]").click();
    await page.locator("(//button[text()='Save Changes'])[2]").click();
});