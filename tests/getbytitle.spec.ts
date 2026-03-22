import { test, expect } from '@playwright/test';
test.skip('Launch application', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
await page.getByTitle('Parabank').click();
  });
