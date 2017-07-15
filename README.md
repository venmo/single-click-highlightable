# SingleClickHighlightable

[![Build Status](https://travis-ci.com/venmo/single-click-highlightable.svg?token=URpWhkPxt9ypQvx1UfXz&branch=master)](https://travis-ci.com/venmo/single-click-highlightable)

SingleClickHighlightable is a HOC for [React](https://facebook.github.io/react/) that allows users to highlight text (copy/paste) on elements without triggering the element's onClick handler.

** **

SingleClickHighlightable is currently used in production in our internal tool at [Venmo](http://www.venmo.com).


### Installation

```
npm install --save single-click-highlightable
```

This assumes that you’re using [npm](http://npmjs.com/).

### Example

```es6
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
```

### Development
Please take a look at `package.json` for available npm scripts.

For running tests: `npm run test`

For compiling `src` directory into `dist` directory with babel: `npm run build`


### Contributing

We'd love for you to contribute.

Please open PRs from your fork to master. Rebase and squash when appropriate.

### License
MIT
