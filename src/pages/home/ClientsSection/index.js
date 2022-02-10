import React from "react";

import { colors } from "styles/colors";
import {
  ClientsContainer,
  ClientsIntro,
  ClientsTitle,
  ClientsDescription,
} from "./styles";

import { SectionWrapper } from "components/Section/styles";
import ClientItem from "./ClientItem";

import client2 from "assets/img/clients/variedades-enrique-transparent.png";
import List from "components/List";

export default function ClientsSection() {
  const clientsLogos = [
    { id: 1, img: client2 },
    { id: 2, img: client2 },
    { id: 3, img: client2 },
  ];
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
        <List items={clientsLogos} renderItem={renderItem} />
      </SectionWrapper>
    </ClientsContainer>
  );
}
