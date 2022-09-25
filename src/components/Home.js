import React from 'react'
import { Banner } from './layout/Banner'
import bannerHome from './../assets/img/banner/banner-home.jpg'
import { Title } from './layout/Title'

export const Home = () => {
  return (
    <div className='container'>
      <Banner image={bannerHome}/>
      <div className="container-title">
        <Title text='WHO AM I?' />
      </div>
    </div>
  )
}
