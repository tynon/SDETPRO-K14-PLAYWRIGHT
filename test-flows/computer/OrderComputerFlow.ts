import { Page } from "@playwright/test";
import ComputerEssentialComponent from "../../models/components/computer/ComputerEssentialComponent";
import ComputerDetailsPage, { ComputerComponentConstructor } from "../../models/pages/ComputerDetailsPage";

export default class OrderComputerFlow{

    constructor(private page: Page, private computerComponentClass: ComputerComponentConstructor<ComputerEssentialComponent>){
        this.page = page;
        this.computerComponentClass = computerComponentClass;
    }

    async buildCompSpecAndAddToCart(): Promise<void>{
        const computerDetailsPage : ComputerDetailsPage = new ComputerDetailsPage(this.page);
        const computerComp = computerDetailsPage.computerComp(this.computerComponentClass);
        await computerComp.selectProcessorType("Fast");
        await computerComp.selectRAMType("8 GB");
        await computerComp.selectHDDType("400 GB");
        await computerComp.selectSoftwareType("Office Suite");
    }
}