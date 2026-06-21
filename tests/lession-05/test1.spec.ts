import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

      await test.step("Fill Username", async () => {
        await page.locator("//input[@id='username']").fill("Le Nghia");
    });

    await test.step("Fill Email", async () => {
        await page.locator("//input[@id='email']").fill("nghialt1404@gmail.com");
    });

    await test.step("Fill Gender", async () => {
        await page.locator("//input[@id='male']").check();
    });

      await test.step("Fill Hobbies", async () => {
        await page.locator("//input[@id='traveling']").check();
    });

     await test.step("Fill Interests", async () => {
        await page.locator("//select[@id='interests']").selectOption("art");
    });

    await test.step("Fill Country", async () => {
        await page.locator("//select[@id='country']").selectOption("canada");
    });

    await test.step("Upload file", async () => {
        await page.locator("//input[@id='profile']").setInputFiles("tests/lession-05/01-dom.txt");
    });

    await test.step("Fill text", async () => {
        await page.locator("//textarea[@id='bio']").fill("Tôi là Nghĩa");
    });

    await test.step("Hover newsletter", async () => {
        await page.locator("//div[@class='tooltip']").hover();
    });
    await test.step("click subscribe", async () => {
        await page.locator("//input[@id='newsletter']").check();
    });

    await test.step("enable feature", async () => {
        await page.locator("//label[@class='switch']").click();
    });

      await test.step("click submit", async () => {
        await page.locator("//button[@type='submit']").click();
    });

   



});

