import React from 'react'
import { Banner } from './layout/Banner'
import { Project } from './layout/Project'
import banner from './../assets/img/banner/banner-home.jpg'

export const Portfolio = () => {

  const projects = [
    {
      name: 'Free Movies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis turpis nec quam placerat, id convallis ligula lacinia. Phasellus eu ultricies risus. Donec ac fringilla dui. Nullam et sollicitudin orci. Suspendisse a convallis urna.',
      img: banner,
      githubUrl: 'https://github.com/vcrolack/Free-movies'
    },
    {
      name: 'Free Movies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis turpis nec quam placerat, id convallis ligula lacinia. Phasellus eu ultricies risus. Donec ac fringilla dui. Nullam et sollicitudin orci. Suspendisse a convallis urna.',
      img: banner,
      githubUrl: 'https://github.com/vcrolack/Free-movies'
    },
    {
      name: 'Free Movies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis turpis nec quam placerat, id convallis ligula lacinia. Phasellus eu ultricies risus. Donec ac fringilla dui. Nullam et sollicitudin orci. Suspendisse a convallis urna.',
      img: banner,
      githubUrl: 'https://github.com/vcrolack/Free-movies'
    },
    {
      name: 'Free Movies',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis turpis nec quam placerat, id convallis ligula lacinia. Phasellus eu ultricies risus. Donec ac fringilla dui. Nullam et sollicitudin orci. Suspendisse a convallis urna.',
      img: banner,
      githubUrl: 'https://github.com/vcrolack/Free-movies'
    }
  ]

  return (
    <div className='container'>
      <Banner image={banner} />
      <div className="container-section-title">
        <h2 classname='title-section'>Portfolio</h2>
      </div>
      <section id='projects'>
        {projects.map((project, index) => {
          return (
          <Project 
            githubUrl={project.githubUrl}
            name={project.name}
            description={project.description}
            img={project.img}
          />
        )})}
      </section>
    </div>
  )
}
