import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Register Page", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();

        // Fill Username
        await page.locator("//input[@id='username']").fill("Le Nghia");

        // Fill Email
        await page.locator("//input[@id='email']").fill("nghialt1404@gmail.com")

        // Fill Gender
        await page.locator("//input[@id='male']").check();

        // Fill Hobbies
        await page.locator("//input[@id='traveling']").check();

        // Fill Interestes
        await page.locator("//select[@id='interests']").selectOption("art");

        // Fill Country
        await page.locator("//select[@id='country']").selectOption("canada");

        // Upload File
        await page.locator("//input[@id='profile']").setInputFiles("tests/lession-05/01-dom.txt");

        // Fill textarea
        await page.locator("//textarea[@id='bio']").fill("Tôi là Nghĩa");

        // Subscribe
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();

        // Enable feature

        await page.locator("//label[@class='switch']").click();
    });


    await test.step("Submit Register", async () => {
        await page.locator("//button[@type='submit']").click();
    });





});

