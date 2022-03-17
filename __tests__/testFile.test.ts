import { TargetLocator } from "selenium-webdriver";
import { HM } from "./pageObjects";

const hm = new HM;

afterAll(async () => {
    await hm.driver.quit();
});   
test ("can do a search", async () => {
    await hm.navigate();
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
