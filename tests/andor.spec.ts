import { test, expect } from '@playwright/test';

test('Login and validate number of products', async ({ page }) => {

  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page
  .getByRole('textbox')
  .and(page.getByPlaceholder('Username'))
  .fill('standard_user');

await page
  .getByRole('textbox')
  .and(page.getByPlaceholder('Password'))
  .fill('secret_sauce');

  //await page.getByPlaceholder('Username').fill('standard_user');
  //await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);

  // Locate all product items
  const productItems = page.locator('.inventory_item');

  // Validate total product count
  await expect(productItems).toHaveCount(6);

});


