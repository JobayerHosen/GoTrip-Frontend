import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import Featured from "../Featured/Featured";
import SectionTitle from "../SectionTitle/SectionTitle";
import Spinner from "../Spinner/Spinner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <SectionTitle title="Most Popular Tours" subtitle="Checkout Featured">
        <p>
          GoTrip is a World Leading Online Tour Booking Platform. Use Reserve Now & Pay Later to secure the activities you don't
          want to miss without being locked in. You'll receive a full refund if you cancel at least 24 hours in advance of most
          experiences.
        </p>
      </SectionTitle>
      <Events home={true}></Events>

      <NavLink to="/allEvents">
        <Button variant="danger" className="btn-main rounded-pill px-3">
          See All Events <i className="bi bi-arrow-right"></i>
        </Button>
      </NavLink>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
