import { VerticalLayout1Module } from './vertical-layout1.module';

describe('VerticalLayout1Module', () => {
  let verticalLayout1Module: VerticalLayout1Module;

  beforeEach(() => {
    verticalLayout1Module = new VerticalLayout1Module();
  });

  it('should create an instance', () => {
    expect(verticalLayout1Module).toBeTruthy();
  });
});
