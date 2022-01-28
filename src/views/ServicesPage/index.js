import React, { useEffect, useState } from "react";

import Layout from "components/Layout/layout";
import ListOfServices from "./ServicesList";
import ServiceDescription from "./ServiceDescription";

import { data } from "./data/ServicesData";

import Section from "components/Section";

export default function Services() {
  const intro =
    "Todo lo que necesitas para llevar tu negocio al siguiente nivel";

  const [service, setService] = useState(data[0]);

  const { name, description, icon, worktype, tools, stepsToFollow } = service;

  const handleActualService = ({
    name,
    description,
    icon,
    tools,
    stepsToFollow,
  }) => {
    console.log("se dispara");
    console.log({ name, description, icon, tools }, "OBJECT");
    setService({ name, description, icon, tools, stepsToFollow });
  };

  useEffect(() => {});

  return (
    <Layout>
      <Section title={intro} titleMarginBottom={false} />
      <ListOfServices services={data} getActualService={handleActualService} />
      {service ? (
        <ServiceDescription
          name={name}
          description={description}
          icon={icon}
          worktype={worktype}
          tools={tools}
          stepsToFollow={stepsToFollow}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
}
