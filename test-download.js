const {By, Key, Builder}= require ("selenium-webdriver");
require("chromedriver");
async function test_download(){
let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://omayo.blogspot.com/p/page7.html");
    await driver.findElement(By.linkText("ZIP file")).click();

}
test_download();