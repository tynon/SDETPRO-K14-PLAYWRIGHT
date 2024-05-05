import { Locator } from "@playwright/test";
import FooterComponent from "./FooterColumnComponent";
import FooterColumnComponent from "./FooterColumnComponent";

export default class InformationColumnComponent extends FooterColumnComponent {

    public static selector: string = ".column.information";     
    
    constructor(component: Locator) {
        super(component);
    }
}