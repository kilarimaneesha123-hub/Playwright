
import { test, expect } from '@playwright/test';

test('Mouse hover on Login - Flipkart', async ({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.flipkart.com/');

  await page.waitForTimeout(4000);   

  // Hover on Login
  //await page.locator("span[role='button']").click();
 await page.locator("//a[@aria-label='Login']").hover();


  await page.waitForTimeout(4000);  

});
