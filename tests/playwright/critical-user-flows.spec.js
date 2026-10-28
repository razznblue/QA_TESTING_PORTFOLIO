
const { test, expect } = require('@playwright/test');

test('user can log in with valid credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter the published demo credentials
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  // Submit the login form
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful authentication
  await expect(page).toHaveURL(
    'https://the-internet.herokuapp.com/secure'
  );

  // Verify the secure area is displayed
  await expect(
    page.getByRole('heading', { name: 'Secure Area' })
  ).toBeVisible();

  // Verify the success message
  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );
});
