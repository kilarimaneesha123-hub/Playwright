import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  await page.goto('https://login.salesforce.com/');
  await page.getByLabel('Remember me').click();

  
});
