import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Todo list", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();

        // Thêm 100 Task
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }

    });


    await test.step(" Xoa Todo so le", async () => {
        page.on('dialog', async dialog => dialog.accept())
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.locator(`//button[@id="todo-${i}-delete"]`).click();
            }

        }

    });

});

