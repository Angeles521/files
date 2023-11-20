const {By,Key,Builder }= require("selenium-webdriver");
require("chromedriver");

async function test_case(){
let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://google.com");
await driver.findElement(By.name("q")).sendKeys("Hola Mundo",Key.RETURN);
}

test_case();