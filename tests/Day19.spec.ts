import {test} from '@playwright/test';

test('Link Text', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('//a[contains(text(),"Elemental")]');

    /*explicitwait
    /const footerLinkEle = await page.waitForSelector('//a[contains(text(),"Elemental_t")]',{timeout: 10000});
    */

    await footerLinkEle.click();

    await page.waitForTimeout(2000);

})

test('Link Text - CSS', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a:has-text("Elemental")');

    await footerLinkEle.click();

    await page.waitForTimeout(2000);

})

test('Link Text - Filtering', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a').filter({hasText: "Elemental"});

    await footerLinkEle.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    await footerLinkEle.click();

    await page.waitForTimeout(2000);

})

test('Multiple matching', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const footerLinkEle = await page.locator('a').elementHandles();
    
    await footerLinkEle[10].click();

    await page.waitForTimeout(2000);

})

test.only('Handle login form', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a').filter({hasText: "Form Authentication"}).click();
    await page.waitForLoadState("domcontentloaded");
    
    //other by xpath
    //await page.locator('//a[contains(text(),"Form Authentication")]').click();

    await page.locator("#username").fill("test");
    await page.locator("#password").fill("1231321");
    await page.waitForTimeout(2000);

    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState("domcontentloaded");

    await page.waitForTimeout(2000);

})