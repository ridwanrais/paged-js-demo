const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Get the absolute path to index.html
  const indexPath = path.resolve(__dirname, "index.html");

  // Load the local HTML file using file:// protocol
  await page.goto(`file://${indexPath}`, { waitUntil: "networkidle2" });

  await page.pdf({
    path: "output.pdf",
    format: "A4",
  });

  await browser.close();
})();
