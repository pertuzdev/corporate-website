import React from "react";

import { SectionContainer, SectionWrapper } from "styles/globalStyles";
import { Title } from "components/common/texts.style";
import { colors } from "styles/colors";

import { ProjectsWrapper } from "./styles";

import { projects } from "./ProjectItemData";
import ProjectItem from "./ProjectItem";
import Section from "components/Common/Section";

export default function ProjectsSection() {
  return (
    <Section title="nuestro trabajo" titleColor={colors["secondary-blue"]}>
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
    </Section>
  );
}
