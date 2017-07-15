import React from 'react';
import PropTypes from 'prop-types';

const replaceWith = ({ type, children }) => (props = {}) => React.createElement(type, props, children);
export const SingleClickHighlightable = ({ children: { type, props } }) => {
  const { children, onClick } = props;
  const returnWith = replaceWith({ children, type });
  const onClickHandler = (...args) => {
    if ( !window.getSelection().toString() ) {
      onClick(...args);
    }
  };
  return returnWith(Object.assign({}, props, { onClick: onClickHandler }));
};

SingleClickHighlightable.propTypes = {
  children: PropTypes.element.isRequired
};

export default SingleClickHighlightable;
