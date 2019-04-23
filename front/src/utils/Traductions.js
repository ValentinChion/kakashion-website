export function setLanguage(languageName) {
  if (window.localStorage.getItem('kakashion-website') && JSON.parse(window.localStorage.getItem('kakashion-website')).language ) {
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
    const localStorage = JSON.parse(window.localStorage.getItem('kakashion-website'));
      return localStorage.language ? localStorage.language : null;
  } else return null
}

export const french = {
  navbar: {
    first: 'A propos',
    second: 'Résumé',
    third: 'Portfolio',
    fourth: 'Contact'
  },
  landing: {
    title: 'Bienvenue sur mon site !',
    subtitle: 'Je suis développeur full-stack, et mon nom est Valentin Chion.'
  },
  about: {
    title: 'Une petite discussion...',
    messageOne: 'Je suis un développeur web junior, avec une première année d\'expérience grâce à une super formation et mes projets personnels.',
    messageTwo: 'J\'ai aussi plus de 9 mois d\'expériences professionnels en intégration de donnée, particulièrement sur Talend Studio & MDM',
    messageThree: {
      one: 'J\'ai de solides bases en',
      two: 'HTML5, CSS3, JavaScript, NodeJS',
      three: 'et aussi sur',
      four: 'ReactJS et Express',
      five: 'afin de proposer des solutions performantes aux besoins web des entreprises'
    },
  },
  more: {
    title: 'Des informations sur moi',
    age: {
      label: 'Âge: ',
      info: '22 ans'
    },
    nationality: {
      label: 'Nationalité: ',
      info: 'Français'
    },
    email: {
      label: 'E-mail: ',
      info: 'valentin.chion@gmail.com'
    },
    phone: {
      label: 'Téléphone: ',
      info: '06 15 40 10 37'
    },
  },
  resume: {
    title: 'Un mini CV',
    experience: {
      title:'Expérience Pro',
      cellOne: 'Développeur Talend - Sopra Steria - Lille - Septembre 2018 | ...',
      cellTwo: 'Développeur VBA - Tupperware - Belgique - Mai | Décembre 2017',
      cellThree: 'Développeur VBA - Safran Aircraft Engines - Vernon - Juin | Août 2016',
    },
    education: {
      title: 'Formation',
      cellOne: 'ITEEM - Diplôme d\'ingénieur et commerciale généraliste - 2014 | 2019',
      cellTwo: 'Spécialisation développement web - 2018 | 2019',
      cellThree: 'TOEIC - 965 | 990 - 2017',
    }
  },
  portfolio: {
    title: 'Des exemples d\'applications',
    cards: {
      cardOne: 'App web CLA',
      cardTwo: 'To-do list',
      cardThree: 'Exemple de PWA',
      cardFour: 'Diaporama web',
      cardFive: 'App web iRate'
    }
  }
};

export const english = {
  navbar: {
    first: 'About',
    second: 'Resume',
    third: 'Portfolio',
    fourth: 'Contact'
  },
  landing: {
    title: 'I\'m Valentin Chion',
    subtitle: 'A full-stack developper, and a lot more !'
  },
  about: {
    title: 'What about me ?',
    messageOne: 'I am a junior web developper with a year of experience thanks to a great formation and personal projects',
    messageTwo: 'I also have 9 months of professional experience in data integration using Talend-Studio & Talend MDM.',
    messageThree: {
      one: 'I have solid bases in',
      two: 'HTML5, CSS3, JavaScript, NodeJS',
      three: 'but also in',
      four: 'ReactJS and Express',
      five: 'to give efficient solution to web problems'
    },
  },
  more: {
    title: 'More info',
    age: {
      label: 'Age: ',
      info: '22'
    },
    nationality: {
      label: 'Nationality: ',
      info: 'French'
    },
    email: {
      label: 'E-mail: ',
      info: 'valentin.chion@gmail.com'
    },
    phone: {
      label: 'Phone: ',
      info: '+33 6 15 40 10 37'
    },
  },
  resume: {
    title: 'My resume',
    experience: {
      title:'Experience',
      cellOne: 'Talend Developper - Sopra Steria - France - September 2018 | ...',
      cellTwo: 'VBA Developper - Tupperware - Belgium - May | December 2017',
      cellThree: 'VBA Developper - Safran Aircraft Engines - France - June | August 2016',
    },
    education: {
      title: 'Education',
      cellOne: 'ITEEM - French Engineering & Business School - 2014 | 2019',
      cellTwo: 'Major in web development - 2018 | 2019',
      cellThree: 'TOEIC - 965 | 990 - 2017',
    },
  },
  portfolio: {
    title: 'All my work in a nutshell',
    cards: {
      cardOne: 'CLA Webapp',
      cardTwo: 'To-do list',
      cardThree: 'PWA example',
      cardFour: 'Slideshow',
      cardFive: 'iRate Webapp'
    }
  }
};
