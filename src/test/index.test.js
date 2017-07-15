import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import App, { TEXT } from './mock-app';

describe('SingleClickHighlightable', () => {
  let app;
  let spy = sinon.spy();
  beforeEach(() => {
    app = mount(<App onClick={spy} />, { attachTo: document.getElementById('root') });
  });

  it('should have text', () => {
    expect(app.text()).toBe(TEXT);
    app.unmount();
  });

  it('should not fire the onClick when text is selected/highlighted', () => {
    app.simulate('click');
    expect(spy.calledOnce).toBe(false);
    app.unmount();
  });

  it('should fire the onClick when text is not selected/highlighted', () => {
    window.getSelection = () => { return { toString: () => null } };
    app.simulate('click');
    expect(spy.calledOnce).toBe(true);
    app.unmount();
  });
});
