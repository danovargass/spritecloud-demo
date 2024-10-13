import { Locator, Page } from '@playwright/test';

export class loginPage {
    readonly page: Page;
    readonly usernameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;
    readonly loginCreds: Locator;

    constructor (page: Page) {
        this.page = page;
        this.usernameTextBox = page.getByTestId('username');
        this.passwordTextBox = page.getByTestId('password');
        this.loginButton = page.getByTestId('login-button');
        this.loginCreds = page.getByTestId('login-credentials');
    }
    async loginProcedure(){ 
        await this.usernameTextBox.fill('standard_user');
        await this.passwordTextBox.fill('secret_sauce');
        await this.loginButton.click();
     }
     async loginCredsDiv(){ await this.loginCreds.isVisible(); }
}