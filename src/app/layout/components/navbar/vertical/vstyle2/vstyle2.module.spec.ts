import { Vstyle2Module } from './vstyle2.module';

describe('Vstyle2Module', () => {
  let vstyle2Module: Vstyle2Module;

  beforeEach(() => {
    vstyle2Module = new Vstyle2Module();
  });

  it('should create an instance', () => {
    expect(vstyle2Module).toBeTruthy();
  });
});
