import {test} from '@playwright/test';
import OrderComputerFlow from '../../test-flows/computer/OrderComputerFlow';
import CheapComputerComponent from '../../models/components/computer/CheapComputerComponent';


test('Test Cheap ComputerComponent', async ({page}) =>{

    const computerFlow : OrderComputerFlow = new OrderComputerFlow(page, CheapComputerComponent);
    await computerFlow.buildCompSpecAndAddToCart();
})