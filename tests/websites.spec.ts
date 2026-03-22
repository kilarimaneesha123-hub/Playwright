import { test, expect } from '@playwright/test';

test('Google homepage should load', async ({ page }) => {

  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);

});

test('Google search box visible', async ({ page }) => {

  await page.goto('https://www.google.com');

  const searchBox = page.locator('textarea[name="q"]');

  await expect(searchBox).toBeVisible();

});

test('Search Playwright in Google', async ({ page }) => {

  await page.goto('https://www.google.com');

  await page.fill('textarea[name="q"]', 'Playwright automation');

  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);

});