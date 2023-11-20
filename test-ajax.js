const { By, Key, Builder, until, Browser } = require("selenium-webdriver");
require("chromedriver");

(async function example () {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();

    await driver.get("https://ratings.fide.com/top.phtml?list=men");
    await driver.sleep(2500)


    let names = await driver.findElements(By.css(".tur"));
    for(let n of names){
        let nombre = await n.getText();
        console.log(await nombre);
        await driver.sleep(2000);
    }

    // window() afecta a la ventana para adaptar las pruebas
    await driver.manage().window().maximize();
})();