import {test} from '@playwright/test'
import HomePage from '../models/pages/HomePage';
import ProductItemComponent from '../models/components/ProductItemComponent';

test('Test List of Component in Page', async ({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const productItemCompList: ProductItemComponent[] = await homePage.productItemComponentList();
    for (const ProductItemComponent of productItemCompList) {
        const productTitle = await ProductItemComponent.productTitle().textContent();
        const productPrice = await ProductItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
    }
    await page.waitForTimeout(1000);
})