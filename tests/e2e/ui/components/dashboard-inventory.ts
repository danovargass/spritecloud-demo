import { Locator, Page } from '@playwright/test';

export class dashboardInventory {
    readonly page: Page;
    readonly titlePresent: Locator;
    readonly hamburgerBtn: Locator;
    readonly logutBtn: Locator;
    readonly slbackpacBtn: Locator;
    readonly addToCartBtn: Locator;

    constructor (page: Page) {
        this.page = page;
        this.titlePresent = page.getByTestId('title');
        this.hamburgerBtn = page.getByRole('button', { name: 'Open Menu' });
        this.logutBtn = page.getByTestId('logout-sidebar-link');
        this.slbackpacBtn = page.locator('[data-test="item-4-title-link"] [data-test]');
        this.addToCartBtn = page.getByTestId('add-to-cart');
    }
    async validateTitle(){ await this.titlePresent.isVisible(); }

    async addToCartFull() { 
        await this.slbackpacBtn.click(); 
        await this.addToCartBtn.click();
    }

    async logoutProcedure(){
        await this.hamburgerBtn.click();
        await this.logutBtn.click();
    }
}