import React from 'react'
import Navbar from './Navbar'
import Middle from './middle'
import Home from './Home'
import Sidebar from './sidebar'
import Submenu from './Submenu'
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Middle />
      <Home />
    </>
  )
}

export default App
