import { test, expect } from '@playwright/test';

test ('Launch application', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

});
