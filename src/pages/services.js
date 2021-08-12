import React, { useEffect, useState } from "react";

import Layout from "components/Layout/layout";
import ServicesIntro from "../components/ServicesPage/IntroSection";
import ListOfServices from "components/ServicesPage/ListOfServices";
import ServiceDescription from "../components/ServicesPage/ServiceDescription";

import { data } from "components/ServicesPage/ListOfServices/ServicesData";

import webIcon from "assets/img/web-icon.svg";

export default function Services() {
  console.log(data, "oli");
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
      <ServicesIntro />
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
