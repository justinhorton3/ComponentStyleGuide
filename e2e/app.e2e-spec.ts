import { ComponentStyleGuidePage } from './app.po';

describe('component-style-guide App', function() {
  let page: ComponentStyleGuidePage;

  beforeEach(() => {
    page = new ComponentStyleGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
