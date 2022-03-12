import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import EventsList from "../EventsList/EventsList";
import QualityService from "../QualityService/QualityService";
import AboutDetails from "./AboutDetails";

const About = () => {
  return (
    <>
      <Breadcrumbs title="о нас" />
      <AboutDetails/>
  {/*     <EventsList /> */}
    </>
  );
};

export default About;
