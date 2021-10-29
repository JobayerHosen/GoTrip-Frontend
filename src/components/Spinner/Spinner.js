import React from "react";
import loader from "../../images/loader-crecent.svg";
const Loading = () => {
  return (
    <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <img style={{ marginTop: "-100px" }} src={loader} alt="" />
    </div>
  );
};

export default Loading;
