import React, { useEffect, useState } from "react";

import { data } from "./data/ServicesData";

import Layout from "components/Layout/layout";
import Section from "components/Section";
import ServicesList from "./ServicesList";
import ServiceDescription from "./ServiceDescription";

export default function Services() {
  const intro =
    "Todo lo que necesitas para llevar tu negocio al siguiente nivel";

  const [service, setService] = useState(data[0]);

  console.log(service, "service");

  const { name, description, icon, worktype, tools, stepsToFollow } = service;

  const handleServiceClick = ({ id }) => {
    const serviceSelected = data.find((elem) => elem.id === id);
    setService(serviceSelected);
  };

  useEffect(() => {});

  return (
    <Layout>
      <Section title={intro} titleMarginBottom={false} />
      <ServicesList services={data} handleServiceClick={handleServiceClick} />
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
