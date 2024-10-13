import { test, expect, type Page } from '@playwright/test';
import envBaseURL from '../../../../utils/envBaseURL';
import { loginPage } from '../components/login-page';
import { dashboardInventory } from '../components/dashboard-inventory';
import { cartView } from '../components/cart';
import { checkoutPage } from '../components/checkout';

const baseURL = envBaseURL.ui.uiEndpoint

test.beforeEach(async ({ page }) => {
  const basicLogin = new loginPage(page);

  await page.goto(baseURL);
  await basicLogin.loginProcedure();

});

test.describe('ui automation suite', () => {
  test('Basic login & logout', async ({ page }) => {
    const basicLogin = new loginPage(page);
    const dashboardInv = new dashboardInventory(page);   
    //logout from app
    await dashboardInv.logoutProcedure();
    //verify login is visible
    await basicLogin.loginCredsDiv();
    expect(await basicLogin.loginButton.isVisible()).toBeTruthy();   

  }),

  test('Checkout item one item', async ({ page }) => {
    const dashboardInv = new dashboardInventory(page);
    const cart = new cartView(page);
    const checkout = new checkoutPage(page);  
    //add item to cart
    await dashboardInv.addToCartFull();
    //validate one item is in cart & click checkout
    await cart.oneItemCart();
    await cart.checkoutBtn();
    //complete checkout with success message
    await checkout.enterCheckoutInfo();
    await checkout.clickContinueStepOne();
    await checkout.clickFinishWthOneItemCart();
    expect(await checkout.completeHeader.isVisible()).toBeTruthy();

  }),

  test('Verify filter functionality', async ({ page }) => {
    const dashboardInv = new dashboardInventory(page);
    //change sorting on the inventory items
    expect (dashboardInv.topLeftLocationAZ).toHaveText('Sauce Labs Backpack')
    await dashboardInv.clickOneDefaultOption('hilo'); 
    expect (dashboardInv.topLeftLocationHiLo).toHaveText('Sauce Labs Fleece Jacket')

    //await dashboardInv.sortItems('az');

  })

})