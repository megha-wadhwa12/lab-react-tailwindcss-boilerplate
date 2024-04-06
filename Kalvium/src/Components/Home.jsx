import React from 'react'
import Navbar from './Navbar'
import Alert from './Alert'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <button className="btn px-6 py-3 rounded-md my-10 bg-[#0ea5e9] text-white mx-32">Button One</button>
        <Alert />
        <Card />
        <Footer />
    </div>
  )
}

export default Home