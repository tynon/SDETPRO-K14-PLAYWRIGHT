// Note : a base component has NO selector

import { Locator } from "@playwright/test";


export default class FooterColumnComponent {
    
    private titleSel: string = "h3";
    private linkSel: string = "li a";

    constructor(private component: Locator) {
        this.component = component;
        this.component.scrollIntoViewIfNeeded();
    }

    title(): Locator {
        return this.component.locator(this.titleSel);
    }

    links(): Promise<Array<Locator>> {
        return this.component.locator(this.linkSel).all();
    }
}