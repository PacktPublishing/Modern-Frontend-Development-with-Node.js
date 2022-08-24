import { test, expect } from '@playwright/test';

test('homepage has micro frontends in the title and in an h1', async ({ page }) => {
  await page.goto('https://microfrontends.art/');

  // Expect the title "to contain" a substring.
  await expect(page).toHaveTitle(/Micro Frontends/);

  // Grab an element ("h1")
  const h1 = page.locator('h1');

  // Expect the element to have a specific text
  await expect(h1).toHaveText('The Art of Micro Frontends');
});
