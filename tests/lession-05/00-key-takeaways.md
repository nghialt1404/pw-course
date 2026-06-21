**Fuction Declaration**
- const <biến> = function(a,b){
    return a+b;
}
**Function Lambda**
- const <biến> = (a,b)=>{
    return a+b;
}
**Anonymous Function**
**DOM**
- Là cấu trúc cây thư mục của một trang web bao gồm các thẻ
**Playwright basic syntax**
- Bắt locator theo xpath
- Navigate đến một trang web : await page.goto("url");
- Nhập vào input: await page.locator("").fill("");
- Thao tác với radiobutton/checkbox : await page.locator("").isChecked(); await page.locator("").check();
- Thao tác với dropdown : await page.locator("").selectOption("value")
- Upload file: await page.locator("").setInputFiles(<filepath>)
- Hover: await page.locator("").hover();
- Thao tác với Confirmation dialog: page.on('dialog',async dialog => dialog.accept())
await page.click(<xpath>)
