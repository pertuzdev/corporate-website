import React from 'react'

import {
  ProjectItemWrapper,
  ProjectItemTextWrapper,
  ProjectItemImgWrapper,
  Img, ProjectItemDescription,
  ProjectItemTitle
} from './styles'

export default function ProjectItem ({ index, amount, color, image, title, description }) {
  const options = {
    scale: 1,
    speed: 50,
    max: 5,
    glare: true,
    'max-glare': 0.8
  }
  return (
    <ProjectItemWrapper color={color} amount={amount} index={index} options={options}>
      <ProjectItemTextWrapper amount={amount} index={index}>
        <ProjectItemTitle>{title}</ProjectItemTitle>
        <ProjectItemDescription>
          {description}
        </ProjectItemDescription>
      </ProjectItemTextWrapper>
      <ProjectItemImgWrapper amount={amount} index={index}>
        <Img src={image} alt='WebIcon'/>
      </ProjectItemImgWrapper>
    </ProjectItemWrapper>
  )
}
