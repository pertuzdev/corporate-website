import React from "react";

import data from "data/data";

import { colors } from "styles/colors";
import {
  ClientsContainer,
  ClientsIntro,
  ClientsTitle,
  ClientsDescription,
} from "./styles";

import { SectionWrapper } from "components/shared/Section/styles";
import List from "components/shared/List";
import ClientItem from "./ClientItem";

export default function ClientsSection() {
  const { clients } = data;

  const renderItem = ({ item }) => {
    const { id, img } = item;
    return <ClientItem key={id} logo={img} />;
  };
  return (
    <ClientsContainer color={colors["primary-purple"]}>
      <SectionWrapper>
        <ClientsIntro>
          <ClientsTitle color="white" marginBottom>
            Clientes
          </ClientsTitle>
          <ClientsDescription color={"white"}>
            Nos gusta construir relaciones estrechas con nuestros clientes.
            Creemos que la colaboración dinámica es la única forma de hacer bien
            el trabajo. Vea lo que dijeron sobre nosotros en las historias de
            clientes.
          </ClientsDescription>
        </ClientsIntro>
        <List items={clients} renderItem={renderItem} />
      </SectionWrapper>
    </ClientsContainer>
  );
}
