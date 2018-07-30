import { Page } from "./app.po";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/");
    });

    it('App should have a title', () => {
      expect(page.getTitle()).toContain('Ionic App')
    });

    it('fill in form', () => {
      page.fillInForm(60, 'Female', 34);
      
    });

  });
});
