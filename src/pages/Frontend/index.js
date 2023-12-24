import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NavBar from 'components/NavBar'
import Home from './Home'
import Motors from './Motor'
import Property from './Property'
import Chat from './Chat'

export default function Index() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='motors' element={<Motors />} />
          <Route path='property' element={<Property />} />
          <Route path='chat' element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
