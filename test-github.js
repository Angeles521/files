const {By, Key, Builder}= require ("selenium-webdriver");
require("chromedriver");

async function test_login(){
let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://github.com");

await driver.findElement(By.partialLinkText("Sign in")).click();

await driver.sleep(2500);
await driver.findElement(By.id("login_field")).sendKeys("Angeles");
await driver.findElement(By.name("password")).sendKeys("1234");

}
test_login();