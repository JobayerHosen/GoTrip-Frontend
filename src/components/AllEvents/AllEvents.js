import React from "react";
import Events from "../Events/Events";
import SectionTitle from "../SectionTitle/SectionTitle";

const AllEvents = () => {
  return (
    <div>
      <SectionTitle title="Find Adventure That Suits You">
        GoTrip is a World Leading Online Tour Booking Platform. Use Reserve Now & Pay Later to secure the activities you don't
        want to miss without being locked in. You'll receive a full refund if you cancel at least 24 hours in advance of most
        experiences.
      </SectionTitle>
      <Events></Events>
    </div>
  );
};

export default AllEvents;
