import React from 'react'
import { Title } from './Title' 
import { Text } from './Text'

export const Project = ({githubUrl, name, description, img}) => {
  return (
    <div className='project-card'>
      <div className="container-img-project">
        <img src={img} alt='An  about the project'/>
      </div>
      <div className="info-project">
        <div className="container-title">
          <Title text={name} />
        </div>
        <div className="description">
          <Text text={description} />
        </div>
        <div className="btn-container">
          <a target='_blank' href={githubUrl}><button className='btn'>Open</button></a>
        </div>
      </div>
    </div>
  )
}
