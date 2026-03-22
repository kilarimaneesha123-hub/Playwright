
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';

test('Login Test', async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login('pavanol', 'test@123');
  
});