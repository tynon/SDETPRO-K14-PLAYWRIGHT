import { Locator, Page } from "@playwright/test";

export default class ProductItemComponent {
    
    public static selector = '.product-item';
    private productTitleLoc = '.product-title';
    private prodcutPriceLoc = 'span[class*="actual-price"]';

    constructor (private component : Locator) {
        this.component = component;
    }

    productTitle() : Locator {
        return this.component.locator(this.productTitleLoc);
    }

    productPrice(): Locator {
        return this.component.locator(this.prodcutPriceLoc);
    }
}