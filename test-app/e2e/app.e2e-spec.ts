import { DigitWmrPage } from './app.po';

describe('digit-wmr App', () => {
  let page: DigitWmrPage;

  beforeEach(() => {
    page = new DigitWmrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
