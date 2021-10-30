import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.height + 3

    // console.log(tempBtn)
    openSubmenu(page, { center, bottom })
  }
  const handle = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className={'nav nav-sticky'} onMouseOver={handle}>
      <div className='nav-center'>
        <div className='nav-header'>
          <div class='logo-holder logo-4'>
            <h3>Just Imagines</h3>
            <p>Not a Chance Encounter!</p>
          </div>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Ciroyelle
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Tyler J
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubMenu}>
              Singlez
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Enter</button>
      </div>
    </nav>
  )
}

export default Navbar
