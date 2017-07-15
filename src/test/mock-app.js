import React, { Component } from 'react';
import SingleClickHighlightable from '../index';

export const TEXT = 'this is our test div';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SingleClickHighlightable>
        <div className="test-div" onClick={this.props.onClick}>
          {TEXT}
        </div>
      </SingleClickHighlightable>
    );
  }
}
