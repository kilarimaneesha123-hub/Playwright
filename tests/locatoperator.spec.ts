import { test, expect } from '@playwright/test';

test('Login and validate number of products', async ({ page }) => {

  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.screenshot({ path: 'screenshots/login-success.png' });

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);
  //await page.screenshot({ path: 'screenshots/login-success.png' });

  // Locate all product items
  const productItems = page.locator('.inventory_item');

  // Validate total product count
  await expect(productItems).toHaveCount(6);

});

