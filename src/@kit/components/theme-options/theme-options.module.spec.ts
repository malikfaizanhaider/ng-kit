import { ThemeOptionsModule } from './theme-options.module';

describe('ThemeOptionsModule', () => {
  let themeOptionsModule: ThemeOptionsModule;

  beforeEach(() => {
    themeOptionsModule = new ThemeOptionsModule();
  });

  it('should create an instance', () => {
    expect(themeOptionsModule).toBeTruthy();
  });
});
