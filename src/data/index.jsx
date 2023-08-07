import styled from 'styled-components'

export const icone = {
  light: 'http://landing.zytheme.com/legal/assets/images/logo/logo-light.png',
  dark: 'http://landing.zytheme.com/legal/assets/images/logo/logo-dark.png',
}

export const navElements = [
  {
    id: 'accueil',
    to: '#',
  },

  {
    id: 'à propos',
    to: '/#about',
  },

  {
    id: 'services',
    to: '/#feature',
  },

  {
    id: 'équipe',
    to: '/#team',
  },

  {
    id: 'pourquoi nous ?',
    to: '/#why-us',
  },

  {
    id: 'avis clients',
    to: '/#feedback',
  },

  {
    id: 'consultation',
    to: '/#free-consultation',
  },

  {
    id: 'Blog',
    to: '/blog',
  },
]

export const countsElements = [
  {
    id: '1',
    icone: 'fa-solid fa-gavel',
    count: '821',
    title: 'Cas Réussis',
  },

  {
    id: '2',
    icone: 'fa-solid fa-book',
    count: '129',
    title: 'Avocats Qualifiés',
  },

  {
    id: '3',
    icone: 'fa-sharp fa-solid fa-scale-balanced',
    count: '2630',
    title: 'Clients Heureux',
  },

  {
    id: '4',
    icone: 'fa-solid fa-medal',
    count: '540',
    title: 'Grandes récompenses',
  },
]

export const separator = (className) => {
  const Separate = styled.div`
    border-bottom: solid 1px #d8ae76;
  `
  return <Separate className={className}></Separate>
}

export const praticeElements = [
  {
    id: 'Criminal',
    img: 'fa-solid fa-handcuffs',
    title: 'Droit criminelle',
  },

  {
    id: 'Real',
    img: 'bi bi-bank',
    title: 'Droit immobilière',
  },

  {
    id: 'Family',
    img: 'fa-solid fa-scale-unbalanced-flip',
    title: 'Droit Familiale',
  },

  {
    id: 'International',
    img: 'fa-solid fa-earth-africa',
    title: 'Droit internationale',
  },

  {
    id: 'Financial',
    img: 'fa-solid fa-money-bills',
    title: 'Droit financière',
  },

  {
    id: 'Technology',
    img: 'fa-solid fa-microchip',
    title: 'Droit de la technologie',
  },
]

export const expertedElements = [
  {
    id: 'Mark',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-1.jpg',
    name: 'Mark Smith',
    post: 'CEO & Manager',
  },

  {
    id: 'Family',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-2.jpg',
    name: 'Ryan Printz',
    post: 'Avocat des affaires familiales',
  },

  {
    id: 'Financial',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-3.jpg',
    name: 'Steve Martin',
    post: 'Avocat des affaires financières',
  },
]

export const Networks = [
  {
    id: '1000',
    icone: 'bi-facebook',
  },
  {
    id: '2000',
    icone: 'bi-twitter',
  },
  {
    id: '3000',
    icone: 'bi-google',
  },

  {
    id: '4000',
    icone: 'bi-linkedin',
  },
]

export const usElements = [
  {
    id: 'Exclusively',
    icone: 'fa-solid fa-book-bookmark',
    title: 'Zones exclusives',
  },

  {
    id: 'Group',
    icone: 'fa-regular fa-handshake',
    title: "Groupe d'avocats",
  },

  {
    id: 'Cases',
    icone: 'fa-solid fa-shield-halved',
    title: 'Cas Réussis',
  },

  {
    id: 'Experts',
    icone: 'fa-solid fa-book-journal-whills',
    title: 'Experts en droit',
  },
]

export const feedbackElements = [
  {
    id: '1',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/1.png',
    name: 'Steve Martin',
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/2.png',
    name: 'Maya Jonson',
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/3.png',
    name: 'Mark Smith',
  },

  {
    id: '10',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/1.png',
    name: 'Aaron Shore',
  },

  {
    id: '20',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/2.png',
    name: 'Anna Wellse',
  },

  {
    id: '30',
    cover: 'http://landing.zytheme.com/legal/assets/images/testimonial/3.png',
    name: 'Thomes Kirckman',
  },
]

export const clientsElements = [
  {
    id: '1',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/1.jpg',
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/2.jpg',
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/3.jpg',
  },

  {
    id: '4',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/4.jpg',
  },

  {
    id: '5',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/5.jpg',
  },

  {
    id: '6',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/3.jpg',
  },

  {
    id: '7',
    cover: 'http://landing.zytheme.com/legal/assets/images/clients/4.jpg',
  },
]

export const networksElements = [
  {
    id: 'twitter',
    icone: 'bi bi-twitter',
  },

  {
    id: 'facebook',
    icone: 'bi bi-facebook',
  },

  {
    id: 'linkedIn',
    icone: 'bi bi-linkedin',
  },

  {
    id: 'Pinterest',
    icone: 'bi bi-pinterest',
  },
]

export const blogsPostsElements = [
  {
    id: '1',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/thumb/1.jpg',
    title: 'Quatre façons de se remonter le moral lors du Blue Monday !',
    comments: 6,
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/thumb/2.jpg',
    title: "L'incroyable équipe juridique présidentielle grandissante ?",
    comments: 3,
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/thumb/3.jpg',
    title: 'Quatre façons de se remonter le moral lors du Blue Monday !',
    comments: 5,
  },
]

export const blogsPagesElements = [
  {
    id: '1',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/1.jpg',
    title:
      '10 choses à savoir sur la pratique fiscale aux États-Unis pour les entreprises',
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/2.jpg',
    title: "L'incroyable équipe juridique présidentielle grandissante ?",
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/3.jpg',
    title:
      "Alors que peuvent faire les cabinets d'avocats ? 19 choses que vous apprendrez",
  },

  {
    id: '4',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/4.jpg',
    title:
      "3 choses que les cabinets d'avocats doivent comprendre pour accroître la diversité des genres",
  },

  {
    id: '5',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/5.jpg',
    title: '10 choses à savoir sur le droit du divertissement',
  },

  {
    id: '6',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/6.jpg',
    title: "Qu'est-ce qui empêche les avocats d'utiliser des Mac au travail ?",
  },

  {
    id: '7',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/7.jpg',
    title:
      "Une note de bas de page importante dans l'histoire de la formation juridique",
  },

  {
    id: '8',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/8.jpg',
    title:
      'Avocats en tant que leaders : votre personnalité est-elle trop légale ?',
  },

  {
    id: '9',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/9.jpg',
    title: 'Ne renvoyez jamais un témoin clé potentiel avant le procès',
  },
]

export const coordonnesElements = [
  {
    id: 'location',
    icone: 'bi bi-geo-alt-fill',
    text: '1220 Petersham town, Wardll St New South Wales Australia PA 6550.',
  },

  {
    id: 'tel',
    icone: 'bi bi-telephone-fill',
    text: '(04) 491 570 110',
  },

  {
    id: 'mail',
    icone: 'bi bi-envelope-fill',
    text: 'contact@zytheme.com',
  },
]

export const width = 1360
