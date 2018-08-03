import { browser, by, element, protractor } from "protractor";
import { userInfo } from "os";

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
    
    element(by.css('.text-input')).clear().then(() => {
      element(by.css('.text-input')).sendKeys(distance); // fill in the distance
    }) 
  
    // element(by.css('.select')).click(); // find the dropdown and click on it
    element(by.css('.select')).click().then(() => {
      browser.sleep(500); // we sleep for a half a second to make sure the popup has popped up

      element(by.cssContainingText('.button-inner', gender)).click(); // click the gender option you want
      element(by.cssContainingText('.button-inner', 'OK')).click();  // click the OK button

    })

    browser.sleep(500); // we sleep for half a second to make sure the popup has disappeared

    var slider = element(by.css('.range-knob-handle')); // select the slider
    // browser.actions().dragAndDrop(slider, {x: -380, y: 0}).perform();  // 
    // slider.click();
    // slider.sendKeys(protractor.Key.ARROW_RIGHT);

    element(by.cssContainingText('.button', 'Calculate')).click();  // click the calculate button
  
  }

  results_card_header() {
    return element(by.css('ion-card-header')).getText();
  } 

  results_card_content() {
    return element(by.css('ion-card-content')).getAttribute('textContent');
  } 
}
