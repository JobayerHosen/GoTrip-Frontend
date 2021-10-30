import React from "react";
import Events from "../Events/Events";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllEvents = () => {
  return (
    <div>
      <SectionTitle title="All Events Opened Now">
        Orci varius natoque penatibus et magnis dis turient montes nascetur ridiculus mus. Cras eleifend tellus sed congue
        consectetur, velit turpis faucibus odio eget volutpat odio lectus eu erat.
      </SectionTitle>
      <Events></Events>
    </div>
  );
};

export default AllEvents;
