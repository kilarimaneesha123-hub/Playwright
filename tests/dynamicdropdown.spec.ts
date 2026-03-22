
import { test, expect } from '@playwright/test';

test('Handle dynamic dropdown on Yatra', async ({ page }) => {

  await page.goto('https://www.yatra.com/', { waitUntil: 'networkidle' });

  // Wait for page to stabilize
  await page.waitForLoadState('domcontentloaded');

  // Sometimes login popup appears – press Escape to close it
  await page.keyboard.press('Escape');

  // Click the "From" field (more reliable locator)
  const fromInput = page.locator('#BE_flight_origin_city');

  await expect(fromInput).toBeVisible({ timeout: 15000 });
  await fromInput.click();
  await fromInput.fill('Mumbai');

  // Wait for suggestion dropdown container
  const suggestionList = page.locator('.viewport li');

  await expect(suggestionList.first()).toBeVisible({ timeout: 15000 });

  // Click first suggestion
  await suggestionList.first().click();

});
