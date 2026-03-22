import { test, expect } from '@playwright/test';

test('List demo', async ({ page }) => {

  await page.goto('https://training.rcvacademy.com/');

  // Locate first 'dynamic-text' section
  const listSection = page.locator("(//div[@class='dynamic-text'])[1]");

  // Locate list items inside that section
  const listItems = listSection.locator('li');

  // Validate the count of list items
  await expect(listItems).toHaveCount(3);

});

