import { test, expect } from '@playwright/test';

test('Launch Salesforce application', async ({ page }) => {

  await page.goto('https://login.salesforce.com/');

  // Fill username
  await page.locator('#username').fill('RCV');

  // Fill password
  await page.locator('#password').fill('RCV');

  // Optional: Click Login
  await page.locator('#Login').click();

  // Optional: Validate page title
  //await expect(page).toHaveTitle(/Salesforce/);

});

