import {
  FaMusic,
  FaGuitar,
  FaPlayCircle,
  FaDeezer,
  FaYoutubeSquare,
  FaAmazon,
  FaSpotify,
  FaArrowAltCircleRight,
  FaApple,
  FaYoutube,
  FaSoundcloud,
} from 'react-icons/fa'
import React from 'react'
const songs = [
  {
    page: 'Ciroyelle',
    links: [
      {
        label: 'So Blessed',
        icon: <FaMusic />,
        url: 'https://www.youtube.com/watch?v=Usy-gFnDavg&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=20',
      },
      { label: 'Its all about trust', icon: <FaMusic />, url: '' },
      {
        label: 'Fighter',
        icon: <FaMusic />,
        url: 'https://www.youtube.com/watch?v=xq6MYDAV2lg&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=11',
      },
      {
        label: '2 Be me',
        icon: <FaMusic />,
        url: 'https://www.youtube.com/watch?v=ttnYycP3jK0&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=12',
      },
      {
        label: 'When You Smile',
        icon: <FaMusic />,
        url: 'https://www.youtube.com/watch?v=0zyIvi8jh9Q&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=14',
      },
      {
        label: 'Like a cat',
        icon: <FaMusic />,
        url: 'https://www.youtube.com/watch?v=pfxIZFxgEcU&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=15',
      },
    ],
  },
  {
    page: 'Tyler J',
    links: [
      {
        label: 'Shadhavar',
        icon: <FaGuitar />,
        url: 'https://www.youtube.com/watch?v=a_gKjqS4iOY&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=2',
      },
      {
        label: 'Numbers in color',
        icon: <FaGuitar />,
        url: 'https://www.youtube.com/watch?v=T5dCOmh_ots&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=19',
      },
      {
        label: 'In the Desert of Shadhavar',
        icon: <FaGuitar />,
        url: 'https://www.youtube.com/watch?v=qqOnfE1HAQI&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=8',
      },
      {
        label: 'Not Another Alien Abduction Story',
        icon: <FaGuitar />,
        url: 'https://www.youtube.com/watch?v=WyeJ_ttbUmI&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=7',
      },
    ],
  },
  {
    page: 'Singlez',
    links: [
      {
        label: 'Imagined Reality',
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=NmrUZizj79M&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=1',
      },
      {
        label: 'Summer Wine (cover)',
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=9DMLbkViRh0&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=21',
      },
      {
        label: 'Baby I am Coming for You',
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=m2ULz8bLazE',
      },
      {
        label: 'Connected Spirits',
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=L6QHhkr78lc&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=18',
      },

      {
        label: 'Numbers in Color',
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=hCPnF47ZPxE&list=PLNtIZs8PewTMhSqukmQryXlGWgEqOpQol&index=13',
      },
    ],
  },
]

export default songs

export const streams = [
  {
    id: 1,
    icon1: <FaSpotify />,
    url: 'https://open.spotify.com/track/5tdYJhXWfbru7SGxSe4KB4',
    name: 'SPOTIFY',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 2,
    icon1: <FaApple />,
    url: 'https://geo.music.apple.com/ug/album/cancel-the-apocalypse-feat-ciroyelle-hurtful-junez/1582804457?i=1582804459&app=music&at=1000lxtM&ls=1',
    name: 'APPLE MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 3,
    icon1: <FaYoutube />,
    url: 'https://www.youtube.com/watch?v=6FZAxvQa13M',
    name: 'YOUTUBE',
    icon2: <FaArrowAltCircleRight />,
  },

  {
    id: 4,
    icon1: <FaMusic />,
    url: 'https://listen.tidal.com/track/195269318',
    name: 'TIDAL',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 5,
    icon1: <FaAmazon />,
    url: 'https://music.amazon.de/albums/B09DM3J7CC?trackAsin=B09DLD418B',
    name: 'AMAZON MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 6,
    icon1: <FaYoutubeSquare />,
    url: 'https://music.youtube.com/coming-soon/',
    name: 'YOUTUBE MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 7,
    icon1: <FaDeezer />,
    url: 'https://music.youtube.com/coming-soon/',
    name: 'DEZEER',
    icon2: <FaArrowAltCircleRight />,
  },
]
export const ciroyelle = [
  {
    id: 1,
    icon1: <FaSpotify />,
    url: 'https://open.spotify.com/artist/0qJr8xW8shlDdhyfERX4Ol',
    name: 'SPOTIFY',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 2,
    icon1: <FaApple />,
    url: 'https://geo.music.apple.com/ug/artist/ciroyelle/1454173676?app=music&at=1000lxtM&ls=1',
    name: 'APPLE MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 3,
    icon1: <FaYoutube />,
    url: 'https://www.youtube.com/channel/UCO-68Ryh8Q9LSeSHjmbb4xA',
    name: 'YOUTUBE',
    icon2: <FaArrowAltCircleRight />,
  },

  {
    id: 4,
    icon1: <FaMusic />,
    url: 'https://listen.tidal.com/artist/15120136',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 5,
    icon1: <FaAmazon />,
    url: 'https://music.amazon.fr/artists/B07PF89HKF',
    name: 'AMAZON MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 6,
    icon1: <FaYoutubeSquare />,
    url: 'https://music.youtube.com/coming-soon/',
    name: 'YOUTUBE MUSIC',
    icon2: <FaArrowAltCircleRight />,
  },
  {
    id: 7,
    icon1: <FaSoundcloud />,
    url: 'https://soundcloud.com/user-100969949?id=988405852',
    name: 'SOUND CLOUD',
    icon2: <FaArrowAltCircleRight />,
  },
]
