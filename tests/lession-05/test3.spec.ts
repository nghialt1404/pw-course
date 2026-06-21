import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai 3", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Add new task", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();

        }

    });

    await test.step(" Xoa task so le", async () => {
        page.on('dialog', async dialog => dialog.accept())
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }

        }

    });

});

