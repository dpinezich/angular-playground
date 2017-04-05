import { EmitterPage } from './app.po';

describe('emitter App', () => {
  let page: EmitterPage;

  beforeEach(() => {
    page = new EmitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
