import { test } from '@playwright/test';

test('Bai Hoc 1: Register Page', async ({ page }) => {

    await test.step("Navige page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bai 4", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    const notes = [
        {
            title: "click",
            content: "Hàm click dùng để thực hiện click vào các phần tử trên trang web"
        },
        {
            title: "fill",
            content: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"
        },
        {
            title: "type",
            content: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"
        },
        {
            title: "hover",
            content: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"
        },
        {
            title: "check",
            content: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"
        },
        {
            title: "uncheck",
            content: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked"
        },
        {
            title: "selectOption",
            content: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"
        },
        {
            title: "press",
            content: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"
        },
        {
            title: "dblclick",
            content: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web"
        },
        {
            title: "dragAndDrop",
            content: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"
        }
    ];
    await test.step("Fill note", async () => {
        for (const note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        }
    });

     await test.step("Search note", async () => {
            await page.locator("//input[@id='search']").fill("một hoặc nhiều");
    
    });
    // await test.step("Fill note", async () => {
    //     for (let i = 1; i <= 10; i++) {
    //         if (i === 1) {
    //             await page.locator("//input[@id='note-title']").fill("click");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 2) {
    //             await page.locator("//input[@id='note-title']").fill("fill");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 3) {
    //             await page.locator("//input[@id='note-title']").fill("type");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 4) {
    //             await page.locator("//input[@id='note-title']").fill("hover");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 5) {
    //             await page.locator("//input[@id='note-title']").fill("check");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 6) {
    //             await page.locator("//input[@id='note-title']").fill("uncheck");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 7) {
    //             await page.locator("//input[@id='note-title']").fill("selectOption");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 8) {
    //             await page.locator("//input[@id='note-title']").fill("press");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else if (i === 9) {
    //             await page.locator("//input[@id='note-title']").fill("dblclick");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
    //             await page.locator("//button[@id='add-note']").click();
    //         } else {
    //             await page.locator("//input[@id='note-title']").fill("dragAndDrop");
    //             await page.locator("//textarea[@id='note-content']").fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
    //             await page.locator("//button[@id='add-note']").click();
    //         }

    //     }

    // });

});

