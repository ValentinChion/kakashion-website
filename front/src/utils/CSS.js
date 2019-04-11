export function setCSS(frameworkName) {
  if(window.localStorage.getItem('kakashion-website')) {
    if(window.localStorage.getItem('kakashion-website') !== frameworkName) {
      window.location.reload(true);
      window.localStorage.setItem('kakashion-website', frameworkName);
      return null
    }
  } else {
    window.localStorage.setItem('kakashion-website', frameworkName);
  }
  getCSSfile(frameworkName);
}

export function getCSSfile() {
  window.localStorage.getItem('kakashion-website') === 'bulma' ? require('../style/bulma.scss') : require('../style/nes.scss');
}

export function getActiveCSS() {
  return window.localStorage.getItem('kakashion-website');
}

export const CSSBulma = {
  button: 'button'
};

export const CSSNes = {
  button: 'nes-btn'
};
