import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  await page.getByAltText('Playwright logo').click();
  
});

