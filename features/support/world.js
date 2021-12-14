import { setWorldConstructor, setDefaultTimeout } from "@cucumber/cucumber";
import puppeteer from "puppeteer";

setDefaultTimeout(30 * 1000);

class AlgoanWorld {
  async openAlgoanPage() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--lang="en-US"', '--window-size=1600,900'],
      defaultViewport: {
        width:1600,
        height:900
      }
    });
    this.page = await this.browser.newPage();
    await this.page.setExtraHTTPHeaders({
      'Accept-Language': 'en'
    });
  }

  async closeAlgoanPage() {
    await this.browser.close();
  }
}

setWorldConstructor(AlgoanWorld);