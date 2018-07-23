import { QuickPanelModule } from './quick-panel.module';

describe('QuickPanelModule', () => {
  let quickPanelModule: QuickPanelModule;

  beforeEach(() => {
    quickPanelModule = new QuickPanelModule();
  });

  it('should create an instance', () => {
    expect(quickPanelModule).toBeTruthy();
  });
});
