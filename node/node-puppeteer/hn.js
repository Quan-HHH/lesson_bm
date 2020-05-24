const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/', {waitUntil: 'networkidle0'});
  let input = await page.$('#kw');
  await input.focus();
  await page.keyboard.type('Hello World!');
  let btn = await page.$('#su');
  btn.click();
  setTimeout(async () => {
    await page.pdf({path: 'hn.pdf', format: 'A4'});

    await browser.close();
  }, 3000);
 
})();