import React from "react";

import { useTranslation } from "gatsby-plugin-react-i18next";

import {
  ProjectItemWrapper,
  ProjectItemTextWrapper,
  ProjectItemImgWrapper,
  Img,
  ProjectItemDescription,
  ProjectItemTitle,
} from "./styles";

export default function ProjectItem({
  index,
  amount,
  color,
  image,
  title,
  trans_key: transKey,
  description,
}) {
  const { t } = useTranslation();
  const options = {
    scale: 1,
    speed: 50,
    max: 5,
    glare: true,
    "max-glare": 0.8,
  };
  return (
    <ProjectItemWrapper
      color={color}
      amount={amount}
      index={index}
      options={options}
    >
      <ProjectItemTextWrapper amount={amount} index={index}>
        <ProjectItemTitle>
          {t(`homepage.projectsSection.projects.${transKey}.title`)}
        </ProjectItemTitle>
        <ProjectItemDescription>
          {t(`homepage.projectsSection.projects.${transKey}.description`)}
        </ProjectItemDescription>
      </ProjectItemTextWrapper>
      <ProjectItemImgWrapper amount={amount} index={index}>
        <Img src={image} alt="WebIcon" />
      </ProjectItemImgWrapper>
    </ProjectItemWrapper>
  );
}
