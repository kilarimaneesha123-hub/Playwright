
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator('#login2');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.locator('//button[normalize-space()="Log in"]');
  }

  async gotoLoginPage(): Promise<void> {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginLink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }
}
module.exports = { LoginPage };