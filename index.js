const app = require("express")();

let chrome = {};
let puppeteer;

puppeteer = require("puppeteer");

app.get("/api", async (req, res) => {
  let options = {};

  try {
    let browser = await puppeteer.launch();

    let page = await browser.newPage();
    await page.goto("https://www.google.com");

    const imgBuffer = await page.screenshot({ omitBackground: true });

    res.setHeader("Content-Type", "image/png");
    res.send(imgBuffer);
    // res.send(await page.title());
  } catch (err) {
    console.error(err);
    return null;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;
