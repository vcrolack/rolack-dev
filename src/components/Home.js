import React from 'react'
import { Banner } from './layout/Banner'
import bannerHome from './../assets/img/banner/banner-home.jpg'

export const Home = () => {
  return (
    <div className='container'>
      <Banner image={bannerHome}/>
    </div>
  )
}
