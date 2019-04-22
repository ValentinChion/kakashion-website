export function setLanguage(languageName) {
  if (window.localStorage.getItem('kakashion-website')) {
    const localStorage = JSON.parse(window.localStorage.getItem('kakashion-website'));
    if (localStorage.language !== languageName) {
      const newLocalStorage = {
        ...localStorage,
        language: languageName
      };
      console.log(newLocalStorage);
      window.localStorage.setItem('kakashion-website', JSON.stringify(newLocalStorage));
      window.location.reload(true);
      return null
    } else return null;
  } else {
    const localStorage = {
      language: languageName
    };
    window.localStorage.setItem('kakashion-website', JSON.stringify(localStorage));
  }
}

export function getActiveLanguage() {
  if (window.localStorage.getItem('kakashion-website')) {
    return JSON.parse(window.localStorage.getItem('kakashion-website')).language;
  } else return null
}

export const french = {
  navbar: {
    first: 'A propos',
    second: 'Résumé',
    third: 'Portfolio',
    fourth: 'Contact'
  }
};

export const english = {
  navbar: {
    first: 'About',
    second: 'Resume',
    third: 'Portfolio',
    fourth: 'Contact'
  }
};
