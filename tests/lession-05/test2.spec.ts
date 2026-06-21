import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Product Page", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();

        // Add 2 product 1
        await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
        // await page.locator("//button[@data-product-id='1']").dblclick();

        // Add 3 product 2
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });

        // Add 1 product 3
        await page.locator("//button[@data-product-id='3']").click();

    });

});

