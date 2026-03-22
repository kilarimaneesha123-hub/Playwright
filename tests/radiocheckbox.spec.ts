
import { test, expect } from '@playwright/test';

test('Radio button example on sample site', async ({ page }) => {

  // 1️⃣ Navigate to the practice page
  await page.goto('https://artoftesting.com/samplesiteforselenium');

  // 2️⃣ Locate the radio buttons (directly on the page)
  const maleRadio = page.locator('input[type="radio"][value="Male"]');
  const femaleRadio = page.locator('input[type="radio"][value="Female"]');

  // 3️⃣ Click the Male radio button and verify
  await maleRadio.click();
  await expect(maleRadio).toBeChecked();
  await expect(femaleRadio).not.toBeChecked();

  // 4️⃣ Click the Female radio button and verify
  await femaleRadio.click();
  await expect(femaleRadio).toBeChecked();
  await expect(maleRadio).not.toBeChecked();

});
