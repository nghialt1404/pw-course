import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai 2", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("Add 2 Sp1", async () => {
        await page.locator("//button[@data-product-id='1']").dblclick();

    });

    await test.step("Add 2 Sp1", async () => {
        for (let i = 1; i <= 3; i++) {
            await page.locator("//button[@data-product-id='2']").click();
        }


    });
    await test.step("Add 1 Sp3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});

