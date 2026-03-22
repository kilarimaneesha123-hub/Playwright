
import { test, expect, BrowserContext, Page } from '@playwright/test';

test('Fixture and browser', async ({ browser }) => {
  // Create a new browser context
  const context: BrowserContext = await browser.newContext();

  // Create a new page in that context
  const page: Page = await context.newPage();

  // Navigate to the page
  await page.goto('https://www.saucedemo.com/inventory.html');

});


// 2️⃣ Custom context with options
test('Fixtures and context demo with custom context', async ({ browser }) => {
  // Create a new browser context with options
  const context: BrowserContext = await browser.newContext({
    baseURL: 'https://playwright.dev/docs/',
    colorScheme: 'dark'
  });

  // Create a page in that context
  const page: Page = await context.newPage();

  // Navigate to a URL
  await page.goto('/ci-intro'); // baseURL is applied

  // Example assertion
  await expect(page).toHaveTitle(/CI/);

  // Close context
  await context.close();
});

