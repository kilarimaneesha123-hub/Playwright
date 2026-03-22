import { test, expect } from '@playwright/test';

test.describe('Parabank Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    console.log('Opening application...');
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  });

  test.afterEach(async ({ page }) => {
    console.log('Test completed');
  });

  test('Verify title', async ({ page }) => {
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
  });

});

