import { TavroPage } from './app.po';

describe('tavro App', function() {
  let page: TavroPage;

  beforeEach(() => {
    page = new TavroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
