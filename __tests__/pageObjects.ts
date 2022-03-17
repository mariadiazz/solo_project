import {By, WebElement} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class HM extends BasePage {
    searchBar: By = By.xpath('//input[@id="main-search"]');
    searchResults: By = By.xpath('//div[@class="page-content"]');
    favorite: By = By.xpath('//button[@class="favorite icon-favorites js-favorite"]');
    favoriteLink: By = By.xpath('//a[@class="menu__favorites"]');
    favoriteResults: By = By.xpath('//h2[@class="BodyText-module--general__2yKZb ProductTitle-module--productTitle__2D3pq BodyText-module--ellipsis__2D65P"]');
    addToBag: By = By.xpath('//button[@class="CTA-module--action__3hGPH CTA-module--medium__dV8ar CTA-module--primary__3hPd- CTA-module--fullWidth__1GZ-5 CTA-module--iconPosition-start__1pCld"]');
    shoppingBag: By = By.xpath('//a[@class="menu__bag goto-shopping-bag rollover-toggle"]');
    bagPage: By = By.xpath('//li[@class="CartItemsList--listItem__yImUQ CartItemsList--noItemDivider__1DF77"]');

    constructor () {
        super({url: "https://www2.hm.com/en_us/index.html"});
    }
    async search(searchTern: string) {
        return this.setInput(this.searchBar, `${searchTern}\n`)
    }
    async getSearchResults () {
        return this.getText(this.searchResults)
    }
    async clickHeart () {
        return this.click(this.favorite)
    }
    async openFavorites () {
        return this.click(this.favoriteLink)
    }
    async getFavoritesResults () {
        return this.getText(this.favoriteResults)
    }
    async clickAddToBag () {
        return this.click(this.addToBag)
    }
    async openBag () {
        return this.click(this.shoppingBag)
    }
    async bagResults () {
        return this.getText(this.bagPage)
    }
}