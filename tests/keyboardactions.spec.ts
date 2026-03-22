
import { test, expect } from '@playwright/test';

test('keyboard operations', async ({ page }) => {
  // empty test
});

test.only('Right click and double click demo', async ({ page }) => {

  await page.goto('https://textbox.johnjago.com/');

  const textbox = page.locator('textarea');

  // Type text slowly
  await textbox.pressSequentially('RCV Academy', { delay: 500 });

  // Select all text
  await textbox.press('Control+A');

  // Delete selected text
  await textbox.press('Backspace');

});
