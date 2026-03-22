import { test, expect, Page, Locator } from '@playwright/test';

test('List demo with for loop', async ({ page }: { page: Page }) => {
  // 1️⃣ Navigate to the page
  await page.goto('https://training.rcvacademy.com/');

  // 2️⃣ Locate the first 'dynamic-text' section
  const listSection: Locator = page.locator("(//div[@class='dynamic-text'])[1]");

  // 3️⃣ Get all list items within that section
  const listItems: Locator[] = await listSection.getByRole('listitem').all();


  

  // 4️⃣ Loop through each list item using a for loop
  for (let i = 0; i < listItems.length; i++) {
    const item: Locator = listItems[i];
    const text: string | null = await item.textContent();  // Get the text of the list item
    console.log(text?.trim());                             // Print it after trimming whitespace
  }
});


