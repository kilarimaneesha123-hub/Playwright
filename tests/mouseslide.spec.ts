
import { test, expect } from '@playwright/test';

test('Mouse slide on jQuery UI slider', async ({ page }) => {

  // Open slider demo application
  await page.goto('https://jqueryui.com/slider/');

  // Switch to iframe (slider is inside iframe)
  const frame = page.frameLocator('.demo-frame');

  // Locate slider handle
  const slider = frame.locator('.ui-slider-handle');

  await slider.waitFor({ state: 'visible' });

  // Get slider position
  const box = await slider.boundingBox();
  if (!box) throw new Error('Slider not found');

  const startX = box.x + box.width / 2;
  const startY = box.y + box.height / 2;

  // Move mouse to slider
  await page.mouse.move(startX, startY);
  await page.mouse.down();

  // Slide 150px to the right
  await page.mouse.move(startX + 150, startY, { steps: 20 });

  await page.mouse.up();

});

