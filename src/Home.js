import React, { useEffect } from 'react'
import tyler from './images/tyler-removebg-preview.png'
import ciro from './images/yelle-removebg.png'

import { useGlobalContext } from './context'
import { streams, ciroyelle } from './data'
import { FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Home() {
  const { closeSubmenu } = useGlobalContext()

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: 'ease-in-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])
  return (
    <div className='modal' onMouseOver={closeSubmenu}>
      <div className='free'></div>
      <div className='music' data-aos='flip-up'>
        <div className='column column1'>
          <img src={tyler} className='ciro-image' alt='myphoto' />
        </div>
        <div className='column column2'>
          <h2>Tyler</h2>
          <div className='box'>
            {streams.map((stream) => {
              const { id, url, name, icon2, icon1 } = stream
              return (
                <div className='spot' key={id}>
                  <a href={url} target='_blank' rel='noreferrer'>
                    {icon1}
                    {name}
                    {icon2}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='music-free'></div>
      <div className='music' data-aos='fade-up'>
        <div className='column column3'>
          <img src={ciro} className='ciro-image' alt='myphoto' />
        </div>
        <div className='column column2'>
          <h2>Ciroyelle</h2>
          <div className='box'>
            {ciroyelle.map((ciroyelle) => {
              const { id, url, name, icon2, icon1 } = ciroyelle
              return (
                <div className='spot' key={id}>
                  <a href={url} target='_blank' rel='noreferrer'>
                    {icon1}
                    {name}
                    {icon2}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className='column column4'>
          <img src={ciro} className='ciro-image' alt='myphoto' />
        </div>
      </div>
      <div className='music-free'></div>

      <div className='form-container' data-aos='flip-left'>
        <div className='form'>
          <form action=''>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='input'
              placeholder='Name
            '
              id='name'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Email'
              className='input'
              id='email'
            />
            <label htmlFor='message'>Message body</label>
            <textarea
              className='textarea'
              name=''
              id='message'
              cols='30'
              rows='10'
              placeholder='Leave us a message'
            ></textarea>
          </form>
        </div>
      </div>

      <footer>
        <div className='page-footer'>
          <div className='footer-links'>
            <a
              href='https://twitter.com/thejustimagines'
              target='_blank'
              rel='noreferrer'
              className='tweet'
            >
              <FaTwitterSquare />
            </a>
            <a
              href='https://www.instagram.com/the_just_imagines/'
              target='_blank'
              rel='noreferrer'
              className='insta'
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
