import { Page } from "@playwright/test";
import SearchComponent from "../components/SearchComponent";

export default class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    searchComponent(): SearchComponent {
        return new SearchComponent(this.page.locator(SearchComponent.selector));
    }
}