import { Locator, Page } from '@playwright/test';

export class checkoutPage {
    readonly page: Page;
    readonly checkoutStepOneName: Locator;
    readonly checkoutStepOneLast: Locator;
    readonly checkoutStepOneZipCode: Locator;
    readonly continueBtn: Locator;
    readonly checkoutSteptwoQty: Locator;
    readonly finishBtn: Locator;
    readonly completeHeader: Locator;

    constructor (page: Page) {
        this.page = page;
        this.checkoutStepOneName = page.getByTestId('firstName');
        this.checkoutStepOneLast = page.getByTestId('lastName');
        this.checkoutStepOneZipCode = page.getByTestId('postalCode');
        this.continueBtn = page.getByTestId('continue');
        this.checkoutSteptwoQty = page.getByTestId('item-quantity');
        this.finishBtn = page.getByTestId('finish');
        this.completeHeader = page.getByTestId('complete-header');
    }

    async enterCheckoutInfo(){ 
        await this.checkoutStepOneName.fill('testName'); 
        await this.checkoutStepOneLast.fill('testLast'); 
        await this.checkoutStepOneZipCode.fill('12345'); 
    }

    async clickContinueStepOne(){ await this.continueBtn.click(); }

    async clickFinishWthOneItemCart(){
        await this.checkoutSteptwoQty.isVisible();
        await this.finishBtn.click();
    }



}