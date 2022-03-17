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
    checkoutButton: By = By.xpath('//button[@class="CTA-module--action__3u4Lb CTA-module--medium__3OtCb CTA-module--primary__2vO6- CartSidebar--continueButton__3ds9k"]');
    continueAsGuest: By = By.xpath('//button[@class="CTA-module--action__3u4Lb CTA-module--medium__3OtCb CTA-module--secondary__3w4kI CTA-module--fullWidth__vCv66 GuestCheckoutBox--button__xmuyi"]');
    checkoutResults: By = By.xpath('//p[@class="BodyText-module--general__tc7rJ ProductThumbnails--metaTextColor__1nQ59"]');
    findStore: By = By.xpath('//a[@href="/en_us/customer-service/shopping-at-hm/store-locator.html"]');
    storeInput: By = By.xpath('//input[@class="BaseInput-module--input__1c5qD Input-module--inputIcon__2_3-Y"]');
    storeResults: By = By.xpath('//li[@id="store-list-US0623"]');
    citySuggestion: By = By.xpath('//button[@class="SuggestionItem-module--suggestion__1qGnH SuggestionItem-module--active__39wqi"]');

    constructor () {
        super({url: "https://www2.hm.com/en_us/index.html"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
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
    async clickCheckout () {
        return this.click(this.checkoutButton)
    }
    async clickContinueAsGuest () {
        return this.click(this.continueAsGuest)
    }
    async getCheckoutResults () {
        return this.getText(this.checkoutResults)
    }
    async clickFindStore () {
        return this.click(this.findStore)
    }
    async storeSearch(zipcode: number) {
        return this.setInput(this.storeInput, `${zipcode}\n`)
    }
    async getStoreResults () {
        return this.getText(this.storeResults)
    }
    async clickSuggestion () {
        return this.click(this.citySuggestion)
    }
}