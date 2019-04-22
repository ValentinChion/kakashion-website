export function setCSS(frameworkName) {
  if(window.localStorage.getItem('kakashion-website')) {
    const localStorage = JSON.parse(window.localStorage.getItem('kakashion-website'));
    if (localStorage.css !== frameworkName) {
      window.location.reload(true);
      const newLocalStorage = {
        ...localStorage,
        css: frameworkName,
      };
      window.localStorage.setItem('kakashion-website', JSON.stringify(newLocalStorage));
      return null
    }
  } else {
    const localStorage = {
      css: frameworkName
    };
    window.localStorage.setItem('kakashion-website', JSON.stringify(localStorage));
  }
  getCSSfile(frameworkName);
}

export function getCSSfile() {
  JSON.parse(window.localStorage.getItem('kakashion-website')).css === 'bulma' ? require('../style/bulma.scss') : require('../style/nes.scss');
}

export function getActiveCSS() {
  if (window.localStorage.getItem('kakashion-website')) {
    return JSON.parse(window.localStorage.getItem('kakashion-website')).css;
  } else {
    return false
  }
}

export const CSSBulma = {
  button: 'button',
  layout: '',
};

export const CSSNes = {
  button: 'nes-btn',
  badge: 'nes-badge',
  layout: 'nes-layout',
};
