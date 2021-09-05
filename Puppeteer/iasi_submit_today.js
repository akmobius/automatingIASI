//puppeteer

const puppeteer = require('puppeteer');
(async() => {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://eoportal.eumetsat.int/cas/login', {waitUntil: 'load'});
    console.log(page.url());

    //fill in the login form
    await page.type('#username','amobius');
    await page.type('#password','mdi161820!');
    await page.click('input[name="submit"]');
    await page.waitForTimeout(20000);

    //now navigate to the specific link (here August 31)
    await page.goto('https://archive.eumetsat.int/usc/UserServicesClient.html');

    console.log("waiting for client to load");
    await page.waitForTimeout(10000);
    const today = new Date().toISOString().slice(0, 10);
    const yest = new Date(today);
    yest.setDate(yest.getDate() - 1);
    const yesterday = new Date(yest).toISOString().slice(0,10);
    await page.goto('https://archive.eumetsat.int/usc/UserServicesClient.html#co:;id=EO:EUM:DAT:METOP:IASIL2TRG;delm=O;form=NetCDF;comp=BZIP2;med=O;noti=1;ssbt=' + yesterday + 'T00:00;ssst=' + today + 'T00:00;udsp=OPE;qqov=ALL;seev=0')

    console.log("waiting for order to load");
    await page.waitForTimeout(10000);    

    console.log("place order");
    await page.evaluate(() => {
        //this is evaluated within the context of the eumetsat page
        let elements = document.getElementsByClassName('usc-button');
        //we create an ID
        elements[2].id="clickme";
    });
    //now we use the ID we just created to click from Puppeteer (simulating a human click)
    await page.click('#clickme');

    console.log("waiting for order form to load");
    await page.waitForTimeout(10000);

    //url has the order number
    console.log(page.url());
    page.close();
    browser.close();

})();