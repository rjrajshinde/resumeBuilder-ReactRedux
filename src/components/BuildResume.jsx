import React from "react";
import "./style/buildResume.css";
import PersonalDetails from "./forms/personalDetails";
import Navbar from "./Navbar";

function BuildResume() {
  return (
    <>
      <Navbar />
      <div className="buildResumeDiv">
        <PersonalDetails />
      </div>
    </>
  );
}

export default BuildResume;
