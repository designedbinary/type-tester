const marked = require('marked');
require('../scss/test.scss');

import test from '../content/test.md';

//onst root = document.querySelector('#root')
//root.innerHTML = `<p>hello</p>`;

// testing out typography.js. But ultimately, its scaling felt strange.
/*
import Typography from 'typography'
 
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Raleway', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 300,
  bodyFontFamily: ['Open+Sans', 'sans-serif'],
  scaleRatio: 5.61,
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Open+Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})
 
// Output CSS as string.
typography.injectStyles()
*/


function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = marked(test);

  return element;
}

document.body.appendChild(component());