import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import NotFound from './pages/NotFound';
import CardDetall from './pages/CardDetail'

const App = () => {
  return (
    <>
      <Router>
        <div className='flex flex-col min-h-screen'>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/card_detail/:id' element={<CardDetall/>} />
            <Route path='*' element={<NotFound/>} />

          
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App