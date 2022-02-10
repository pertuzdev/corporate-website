import React from "react";

import { colors } from "styles/colors";

import Section from "components/Section";
import List from "components/List";
import { projects } from "./ProjectItemData";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  const renderItem = ({ item, index }) => {
    const { id } = item;
    return (
      <ProjectItem key={id} index={index} amount={item.length} {...item} />
    );
  };
  return (
    <Section title="nuestro trabajo" titleColor={colors["secondary-blue"]}>
      <List items={projects} renderItem={renderItem} />
    </Section>
  );
}
