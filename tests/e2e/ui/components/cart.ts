import { Locator, Page } from '@playwright/test';

export class cartView {
    readonly page: Page;
    readonly oneItemPresent: Locator;
    readonly cktBtn: Locator;
    readonly cartBtn: Locator;

    constructor (page: Page) {
        this.page = page;
        this.oneItemPresent = page.getByTestId('item-quantity');
        this.cartBtn = page.getByTestId('shopping-cart-link');
        this.cktBtn = page.getByTestId('checkout');

    }

    async oneItemCart(){ 
        await this.cartBtn.click();
        await this.oneItemPresent.isVisible(); 
    }

    async checkoutBtn(){ await this.cktBtn.click(); }

}