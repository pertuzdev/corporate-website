import React from "react";

import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/common/texts.style";
import { colors } from "styles/colors";

import { ProjectsWrapper } from "./styles";

import { projects } from "./ProjectItemData";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <Title color={colors["secondary-blue"]} marginBottom>
          Nuestro Trabajo
        </Title>
        <ProjectsWrapper>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.title}
              index={index}
              amount={projects.length}
              {...project}
            />
          ))}
        </ProjectsWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
}
