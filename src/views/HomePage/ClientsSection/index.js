import React from "react";

import { colors } from "styles/colors";

import { Title } from "components/common/texts.styles";
import { SectionWrapper } from "components/Section/styles";

import ClientItem from "./ClientItem";

import {
  ClientsContainer,
  ClientsIntro,
  ClientsTitle,
  ClientsDescription,
  ClientsList,
} from "./styles";

import client1 from "assets/img/almacen_alex.png";
import client2 from "assets/img/variedades-enrique-transparent.png";

export default function ClientsSection() {
  const clientsLogos = [client2, client2, client2];
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
        <ClientsList>
          {clientsLogos.map((clientLogo) => (
            <ClientItem logo={clientLogo} />
          ))}
        </ClientsList>
      </SectionWrapper>
    </ClientsContainer>
  );
}
