import { TargetLocator } from "selenium-webdriver";
import { HM } from "./pageObjects";

const hm = new HM;

afterAll(async () => {
    await hm.driver.quit();
});  
test ("can do a search", async () => {
    await hm.navigate();
    await hm.acceptCookies();
    await hm.search("beanie");
    expect (await hm.getSearchResults()).toContain("Hat")
})
test ("can favorite a product", async () => {
    await hm.clickHeart();
    await hm.openFavorites();
    expect (await hm.getFavoritesResults()).toContain("Hat")
})
test ("can add a product to bag", async () => {
    await hm.clickAddToBag();
    await hm.openBag();
    expect (await hm.bagResults()).toContain("Hat")
})
test ("can open checkout page", async () => {
    await hm.clickCheckout();
    await hm.clickContinueAsGuest();
    expect (await hm.getCheckoutResults()).toContain("1")
})
test ("can find a store", async () => {
    await hm.navigate();
    await hm.clickFindStore();
    await hm.storeSearch(94544);
    await hm.clickSuggestion();
    expect (await hm.getStoreResults()).toContain("Hayward")
})
test ("can use menu categories", async () => {
    await hm.navigate();
    await hm.clickSale();
    await hm.clickWomen();
    await hm.clickViewAll();
    expect (await hm.getHeaderResults()).toContain("WOMEN'S SALE")
})