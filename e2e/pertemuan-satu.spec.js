import { test, expect } from '@playwright/test';
 
test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const username = 'standars_user';
  const password = 'secret_sauce';

  const inputUsername = page.locator('#user-name');
  await inputUsername.fill(username);
  await expect(inputUsername).toHaveValue(username);

  const inputPassword = page.locator('#password');
  await inputPassword.fill(password);
  await expect(inputPassword).toHaveValue(password);

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();

});