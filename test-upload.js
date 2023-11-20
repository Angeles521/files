const {By, Key, Builder}= require ("selenium-webdriver");
require("chromedriver");
async function test_upload(){
let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://omayo.blogspot.com/");
    await driver.executeScript("window.scrollBy(0,1100)");
    await driver.findElement(By.id("uploadfile")).sendKeys("D:\\Descargas\\fondo");

}
test_upload();