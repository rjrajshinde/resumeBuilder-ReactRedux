import React from "react";
import "./style/home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mainDiv">
        <div class="main">
          <h1>
            Build Your:{" "}
            <div class="roller">
              <span id="rolltext">
                Resume
                <br />
                CV
                <br />
                Bio
                <br />
                <span id="lastRoller">It's easy right!</span>
              </span>
              <br />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
