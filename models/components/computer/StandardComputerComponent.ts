import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class StandardComputerComponent extends ComputerEssentialComponent{
    
    constructor(component: Locator){
        super(component);
    }
    public selectProcessorType(type: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public selectRAMType(type: string): Promise<void> {
        throw new Error("MeFthod not implemented.");
    }
    
}