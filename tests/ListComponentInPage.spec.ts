import {test} from '@playwright/test'
import HomePage from '../models/pages/HomePage';
import ProductItemComponent from '../models/components/ProductItemComponent';
import PageBodyComponent from '../models/components/PageBodyComponent';

test('Test List of Component in Page', async ({page}) =>{

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const pageBodyComponent: PageBodyComponent = await homePage.pageBodyComponent();
    const productItemCompList: ProductItemComponent[] = await pageBodyComponent.productItemComponentList();
    
    const productgrid = await pageBodyComponent.productgrid().textContent();
    console.log(`Title: ${productgrid}`);
    for (const ProductItemComponent of productItemCompList) {
        const productTitle = await ProductItemComponent.productTitle().textContent();
        const productPrice = await ProductItemComponent.productPrice().textContent();
        console.log(`${productTitle?.trim()}: ${productPrice?.trim()}`);
    }
    await page.waitForTimeout(1000);
})