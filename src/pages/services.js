import React, { useState } from "react";

import Layout from "components/Layout/layout";
import ServicesIntro from "../components/ServicesPage/IntroSection";
import ListOfServices from "components/ServicesPage/ListOfServices";
import ServiceDescription from "../components/ServicesPage/ServiceDescription";

import webIcon from "assets/img/web-icon.svg";

export default function Services() {
  const [service, setService] = useState({
    name: "desarrollo web",
    description: "esto es desarrollo web",
    icon: webIcon,
    worktype: [],
    tools: [],
  });

  const { name, description, icon, worktype, tools } = service;

  const handleActualService = ({
    name,
    description,
    icon,
    worktype,
    tools,
  }) => {
    console.log("se dispara");
    console.log({ name, description, icon, worktype, tools }, "OBJECT");
    setService({ name, description, icon, worktype, tools });
  };

  return (
    <Layout>
      <ServicesIntro />
      <ListOfServices getActualService={handleActualService} />
      {service ? (
        <ServiceDescription
          name={name}
          description={description}
          icon={icon}
          worktype={worktype}
          tools={tools}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
}
