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

  it('the app should have text', () => {
    expect(app.text()).toBe(TEXT);
    app.unmount();
  });

  it('should not fire the on click when text is selected/highlight', () => {
    app.simulate('click');
    expect(spy.calledOnce).toBe(false);
    app.unmount();
  });

  it('should fire the on click when text is not selected/highlight', () => {
    window.getSelection = () => { return { toString: () => null } };
    app.simulate('click');
    expect(spy.calledOnce).toBe(true);
    app.unmount();
  });
});
