import { test, expect, Page } from '@playwright/test';

test('Handle multiple tabs example', async ({ page, context }) => {

  // 1️⃣ Navigate to example site
  await page.goto('https://the-internet.herokuapp.com/windows');

  // Verify parent page title
  await expect(page).toHaveTitle('The Internet');

  // 2️⃣ Wait for new tab to open after clicking link
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // Wait for new tab
    page.click('text=Click Here')   // Action that opens new tab
  ]);

  // 3️⃣ Wait for new tab to load
  await newPage.waitForLoadState();

  // 4️⃣ Validate new tab content
  await expect(newPage).toHaveURL(/windows\/new/);
  await expect(newPage.locator('h3')).toHaveText('New Window');

  // 5️⃣ Close new tab
  await newPage.close();

  // 6️⃣ Back to original tab
  await expect(page.locator('h3')).toHaveText('Opening a new window');
});