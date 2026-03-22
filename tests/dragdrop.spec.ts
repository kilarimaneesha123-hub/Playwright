
import { test, expect } from '@playwright/test';

test('Drag drop demo', async ({ page }) => {

  // Open drag & drop demo application
  await page.goto('https://jqueryui.com/droppable/');

  // Switch to iframe
  const frame = page.frameLocator('.demo-frame');

  // Locate draggable and droppable elements
  const toDrag = frame.locator('#draggable');
  const toDrop = frame.locator('#droppable');

  // Perform drag and drop
  await toDrag.dragTo(toDrop);

  // Assertion (optional but recommended)
  await expect(toDrop).toHaveText('Dropped!');
});
