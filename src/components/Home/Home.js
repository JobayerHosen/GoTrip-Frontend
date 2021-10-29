import React from "react";
import useAuth from "../../hooks/useAuth";
import Banner from "../Banner/Banner";
import Events from "../Events/Events";
import SectionTitle from "../SectionTitle/SectionTitle";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <Banner></Banner>
      <SectionTitle title="Most Popular Tours">
        <p>
          Orci varius natoque penatibus et magnis dis turient montes nascetur ridiculus mus. Cras eleifend tellus sed
          congue consectetur, velit turpis faucibus odio eget volutpat odio lectus eu erat.
        </p>
      </SectionTitle>
      <Events></Events>
    </div>
  );
};

export default Home;
