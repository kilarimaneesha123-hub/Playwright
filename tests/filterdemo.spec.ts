import { test, expect } from '@playwright/test';

test('Login and add Sauce Labs Bolt T-Shirt to cart', async ({ page }) => {

  // Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);

  // Add "Sauce Labs Bolt T-Shirt" to cart
  await page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
    .getByRole('button', { name: 'Add to cart' })
    .click();

  // Verify cart badge shows 1 item
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

