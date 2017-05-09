import { Angular2SpotiappPage } from './app.po';

describe('angular2-spotiapp App', () => {
  let page: Angular2SpotiappPage;

  beforeEach(() => {
    page = new Angular2SpotiappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
