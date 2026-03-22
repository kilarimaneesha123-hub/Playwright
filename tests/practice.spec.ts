import { test, expect, Page } from '@playwright/test';
import { promises } from 'node:dns';

test('Handle multiple tabs example', async ({ page, context }) => {

  // 1️⃣ Navigate to example site
  await page.goto('https://the-internet.herokuapp.com/windows');
  

  await expect(page).toHaveTitle('The Internet');
const [newPage] = await promise.all([
    context.waitForEvent('page');
    page.click('text=Click Here')
)];
await newpage.waitForLoadState();
await expect(newpage).toHaveURL(/windows\/new/);
await expect(newpage.locator('h3').)
