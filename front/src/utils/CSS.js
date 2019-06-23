export function setCSS(frameworkName) {
  if (window.localStorage.getItem('kakashion-website')) {
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
  if (JSON.parse(window.localStorage.getItem('kakashion-website')).css === 'bulma') {
    require('../style/bulma.scss');
    require('../style/bulma-enhance.css');
  } else {
    require('../style/nes.scss');
    require('../style/nes-enhance.css');
  }
}

export function getActiveCSS() {
  if (window.localStorage.getItem('kakashion-website')) {
    return JSON.parse(window.localStorage.getItem('kakashion-website')).css;
  } else {
    return false
  }
}
