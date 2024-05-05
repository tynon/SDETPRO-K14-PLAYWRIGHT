import { Locator } from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {

    public static selector: string = ".page-body";
    private productgridLoc: string = "//div[@class='product-grid home-page-product-grid']/div[@class='title']/strong";
    
    constructor(private component: Locator) {
        this.component = component;
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.component.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }

    productgrid(): Locator{
        return this.component.locator(this.productgridLoc);
    }
}