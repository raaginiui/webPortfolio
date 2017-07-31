import { RajaPage } from './app.po';

describe('raja App', () => {
  let page: RajaPage;

  beforeEach(() => {
    page = new RajaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
