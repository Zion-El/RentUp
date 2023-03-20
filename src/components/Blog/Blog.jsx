import React from 'react'
import Header from '../common/header'
import './Blog.css'
import SemiHero from '../About/back'
import Footer from '../common/Footer'
import Recent from '../Home/recent/Recent'
import Image from "../assets/services.jpg"

const Blog = () => {
  return (
    <div className='blog'>
        <Header/>
        <SemiHero title="Blog" description="Blog Grid - Our Blogs" cover={Image}/>
        <Recent/>
        <Footer/>
    </div>
  )
}

export default Blog