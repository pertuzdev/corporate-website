import React from "react";

import data from "data/data";

import { colors } from "styles/colors";

import Section from "components/shared/Section";
import List from "components/shared/List";

import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  const { projects } = data;
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
