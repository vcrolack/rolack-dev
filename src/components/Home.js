import React from 'react'
import { Banner } from './layout/Banner'
import { Title } from './layout/Title'
import bannerHome from './../assets/img/banner/banner-home.jpg'
import victor from './../assets/img/I.jpeg'

export const Home = () => {
  return (
    <div className='container'>
      <Banner image={bannerHome}/>
      <section id='who-i-am'>
        <div className="container-title">
          <Title text='WHO AM I?' />
        </div>
        <div className="container-cards">
          <div className="card">
            <div className="container-img-victor">
              <img src={victor} alt="" />
            </div>
            <div className="about-me">
              <div className="info-victor">
                <h2> I'm Víctor Rolack</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nemo aperiam maiores sed ipsam assumenda ullam! Blanditiis, totam facilis, neque ipsa vitae, labore repellat ut saepe dicta tempore suscipit. Voluptate?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa id odio commodi omnis, deleniti at quaerat corporis nisi laborum quibusdam ut eveniet velit sint expedita dolorum molestias, distinctio fugiat? Saepe!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nesciunt est perspiciatis ipsam aut error deserunt tenetur incidunt quia, quibusdam tempora beatae, mollitia molestiae, assumenda repudiandae quos voluptates exercitationem similique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
