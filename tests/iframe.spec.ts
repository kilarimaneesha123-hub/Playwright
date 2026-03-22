
import { test, expect } from '@playwright/test';

test('Interact with iframe on W3Schools', async ({ page }) => {

  // 1️⃣ Go to the W3Schools TryIt page
  await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic');

  // 2️⃣ Locate the iframe
  const frame = page.frameLocator('#iframeResult');

  // 3️⃣ Get the heading inside the iframe
  const heading = frame.locator('h1');

  // 4️⃣ Assert the text inside the iframe
  await expect(heading).toHaveText('Hello World!');

});