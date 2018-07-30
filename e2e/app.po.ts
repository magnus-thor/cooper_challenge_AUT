import { browser, by, element } from "protractor";

export class Page {
  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName("homepage"))
      .element(by.tagName("ion-title"))
      .getText();
  }

  fillInForm(distance, gender, age) {
    element(by.cssContainingText('ion-label', 'Distance')).nextElementSibling.sendKeys(distance);
  }
}
