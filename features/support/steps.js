import { expect } from "chai";
import { After, Before, Given, Then, When } from "@cucumber/cucumber";

const PAGE = "https://www.algoan.com/";
const demoButton = "a[href='https://www.algoan.com/ask-for-a-demo/'";

Before(async function(testCase) {
  return await this.openAlgoanPage();
});

After(async function() {
  return await this.closeAlgoanPage();
});

Given("I go to Algoan web page", async function() {
  await this.page.goto(PAGE);
  await this.page.waitForTimeout(5000);
});

Then(/^I can see "([^"]*)" in title$/, async function (title) {
  const pageTitle = await this.page.title();
  expect(pageTitle).to.equal(title);
});

When("I go to demo page", async function() {
  await this.page.waitForSelector('div[role="dialog"] button[mode="primary"]');
  await this.page.click('button[mode="primary"]');
  await this.page.waitForSelector(demoButton);
  await this.page.click(demoButton);
});

Then("I can see form", async function() {
  await this.page.waitForSelector('form');
});