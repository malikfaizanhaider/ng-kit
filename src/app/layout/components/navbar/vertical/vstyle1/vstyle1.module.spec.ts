import { Vstyle1Module } from './vstyle1.module';

describe('Vstyle1Module', () => {
  let vstyle1Module: Vstyle1Module;

  beforeEach(() => {
    vstyle1Module = new Vstyle1Module();
  });

  it('should create an instance', () => {
    expect(vstyle1Module).toBeTruthy();
  });
});
