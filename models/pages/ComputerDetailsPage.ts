import { Page } from "@playwright/test";

export default class ComputerDetailsPage {
    constructor(private page: Page) {
        this.page = page;
    }
}