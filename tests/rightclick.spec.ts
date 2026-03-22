
import { test, expect } from '@playwright/test';

test('keyboard operations', async ({ page }) => {
  // empty test (optional)
});

test('Right click and double click demo', async ({ page }) => {

  await page.goto('https://textbox.johnjago.com/');

  const textbox = page.locator('//textarea');

  // Type text slowly
  await textbox.pressSequentially('RCV Academy', { delay: 100 });

  // Double click
  await textbox.dblclick();

  // Right click
  await textbox.click({ button: 'right' });

});
 

