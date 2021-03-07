import React from 'react'

import { OnContainer, SectionWrapper, Title, Colors } from '../../styles/globalStyles'

import { ProjectsWrapper } from './styles'

import { projects } from './ProjectItemData'
import ProjectItem from './ProjectItem'

export default function OurWork () {
  return (
    <OnContainer>
      <SectionWrapper>
        <Title color={Colors['secondary-blue']} marginBottom>Nuestro Trabajo</Title>
        <ProjectsWrapper>
          {
            projects.map((project, index) => <ProjectItem key={project.title} index={index} amount={projects.length} {...project} />)
          }
        </ProjectsWrapper>
      </SectionWrapper>
    </OnContainer>
  )
}
