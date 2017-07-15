import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
const { window } = (new JSDOM(documentHTML));
global.window = window;
global.document = document;

global.window.getSelection = () => {
  return { 
    addRange: () => null, 
    removeAllRanges: () => null,
    toString: () => 'test string' 
  };
};
