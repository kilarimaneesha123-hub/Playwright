import { test, expect } from '@playwright/test';

test('Select static dropdown', async ({ page }) => {


  // Navigate to website
  test.slow();
  await page.goto('https://letcode.in/dropdowns?utm_source=chatgpt.com');

  // Select by value
  await page.locator('#fruits').selectOption({ value: '1' });

  // Select by visible text (label)
  await page.locator('#fruits').selectOption({ label: 'Apple' });

  // Select by index (number, not string)
  await page.locator('#fruits').selectOption({ index: 1 });

  // Wait for 3 seconds (optional)
  await page.waitForTimeout(3000);

});

  

