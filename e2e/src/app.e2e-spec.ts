import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/Dashboard');
    });
    it('should say Dashboard', () => {
      expect(page.getParagraphText()).toContain('Dashboard');
    });
  });
});
