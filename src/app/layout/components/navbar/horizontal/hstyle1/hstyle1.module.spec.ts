import { Hstyle1Module } from './hstyle1.module';

describe('Hstyle1Module', () => {
  let hstyle1Module: Hstyle1Module;

  beforeEach(() => {
    hstyle1Module = new Hstyle1Module();
  });

  it('should create an instance', () => {
    expect(hstyle1Module).toBeTruthy();
  });
});
