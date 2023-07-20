import styled from 'styled-components'

export const icone = {
  light: 'http://landing.zytheme.com/legal/assets/images/logo/logo-light.png',
  dark: 'http://landing.zytheme.com/legal/assets/images/logo/logo-dark.png',
}

export const navElements = [
  {
    id: 'home',
    to: '/',
  },

  {
    id: 'about',
    to: '/#about',
  },

  {
    id: 'feature',
    to: '/#feature',
  },

  {
    id: 'team',
    to: '/#team',
  },

  {
    id: 'Why Us',
    to: '/#why-us',
  },

  {
    id: 'feedback',
    to: '/#feedback',
  },

  {
    id: 'free consultation',
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
    title: 'Cases Won',
  },

  {
    id: '2',
    icone: 'fa-solid fa-book',
    count: '129',
    title: 'Skilled Lawyers',
  },

  {
    id: '3',
    icone: 'fa-sharp fa-solid fa-scale-balanced',
    count: '2630',
    title: 'Happy Clients',
  },

  {
    id: '4',
    icone: 'fa-solid fa-medal',
    count: '540',
    title: 'Great Rewards',
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
    title: 'Criminal Law',
  },

  {
    id: 'Real',
    img: 'bi bi-bank',
    title: 'Real Estate Law',
  },

  {
    id: 'Family',
    img: 'fa-solid fa-scale-unbalanced-flip',
    title: 'Family Law',
  },

  {
    id: 'International',
    img: 'fa-solid fa-earth-africa',
    title: 'International Law',
  },

  {
    id: 'Financial',
    img: 'fa-solid fa-money-bills',
    title: 'Financial Law',
  },

  {
    id: 'Technology',
    img: 'fa-solid fa-microchip',
    title: 'Technology Law',
  },
]

export const expertedElements = [
  {
    id: '100',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-1.jpg',
    name: 'Mark Smith',
    post: 'CEO & Manager',
  },

  {
    id: '200',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-2.jpg',
    name: 'Ryan Printz',
    post: 'Family Lawyer',
  },

  {
    id: '300',
    cover: 'http://landing.zytheme.com/legal/assets/images/team/team-3.jpg',
    name: 'Steve Martin',
    post: 'Financial Lawyer',
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
    id: '10000',
    icone: 'fa-solid fa-book-bookmark',
    title: 'Exclusively Areas',
  },

  {
    id: '20000',
    icone: 'fa-regular fa-handshake',
    title: 'Group Of Lawyers',
  },

  {
    id: '30000',
    icone: 'fa-solid fa-shield-halved',
    title: 'Cases Results',
  },

  {
    id: '40000',
    icone: 'fa-solid fa-book-journal-whills',
    title: 'Experts In Law',
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
    title: 'Four ways to cheer yourself up on the Blue Monday!',
    comments: 6,
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/thumb/2.jpg',
    title: 'Old cameras can capture images better than nowdays camera!',
    comments: 3,
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/thumb/3.jpg',
    title: 'Four ways to cheer yourself up on the Blue Monday!',
    comments: 5,
  },
]

export const blogsPagesElements = [
  {
    id: '1',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/1.jpg',
    title: '10 things to know about tax practice in usa for companies',
  },

  {
    id: '2',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/2.jpg',
    title: 'The incredible growing presidential legal team how to?',
  },

  {
    id: '3',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/3.jpg',
    title: 'So what can law firms do?19 thing you will learn',
  },

  {
    id: '4',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/4.jpg',
    title: '3 things law firms must understand to increase gender diversity',
  },

  {
    id: '5',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/5.jpg',
    title: '10 things to know about entertainment law',
  },

  {
    id: '6',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/6.jpg',
    title: 'What stops lawyers from using Macs at work?',
  },

  {
    id: '7',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/7.jpg',
    title: 'An important footnote in the history of legal education',
  },

  {
    id: '8',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/8.jpg',
    title: 'Lawyers as leaders: is your personality too legal?',
  },

  {
    id: '9',
    cover: 'http://landing.zytheme.com/legal/assets/images/blog/standard/9.jpg',
    title: 'Never fire a potential key witness before trial',
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
