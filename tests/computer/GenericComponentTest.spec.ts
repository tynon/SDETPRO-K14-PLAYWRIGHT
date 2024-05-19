import {test} from '@playwright/test';
import ComputerDetailsPage from '../../models/pages/ComputerDetailsPage';
import CheapComputerComponent from '../../models/components/computer/CheapComputerComponent';
import StandardComputerComponent from '../../models/components/computer/StandardComputerComponent';
import ComputerEssentialComponent from '../../models/components/computer/ComputerEssentialComponent';


test('Test Generic in Page', async ({page}) =>{

    const computerDetailsPage: ComputerDetailsPage = new ComputerDetailsPage(page);
    const cheapComputerComponent: ComputerEssentialComponent = computerDetailsPage.computerComp(CheapComputerComponent);
    const standardomputerComponent: ComputerEssentialComponent = computerDetailsPage.computerComp(StandardComputerComponent);

    await cheapComputerComponent.selectProcessorType("test");
    await standardomputerComponent.selectProcessorType("test1");
})