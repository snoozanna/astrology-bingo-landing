import React, { useState } from "react";
import ExpandedOrb from "../components/ExpandedOrb/ExpandedOrb";
import Orb from "../components/Orb/Orb";
import logo from "./../assets/logo/ab-logo-white.png";
import rocket from "./../assets/winner.png";
import trolley from "./../assets/trolley.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useSpring, animated } from "react-spring";
import "./landing.css";

const Landing = () => {
  const [modalHero, setModalHero] = useState("closed");
  const [modalSec, setModalSec] = useState("closed");
  const [modalAft, setModalAft] = useState("closed");
  const [isHeroOpen, setIsHeroOpen] = useState(false);
  const [isSecOpen, setIsSecOpen] = useState(false);
  const [isAftOpen, setIsAftOpen] = useState(false);

  const modalHeroHandler = (modal) => {
    setIsHeroOpen(!isHeroOpen);
    setModalHero(modal);
  };

  const modalSecHandler = (modal) => {
    setIsSecOpen(!isSecOpen);
    setModalSec(modal);
  };

  const modalAftHandler = (modal) => {
    setIsAftOpen(!isAftOpen);
    setModalAft(modal);
  };

  return (
    <>
      <div className="landing">
        <Parallax pages={6} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>FIGS IN WIGS</h1>

            <img src={logo} alt="astrology bingo logo" className="ablogo"></img>
          </ParallaxLayer>

          <ParallaxLayer
            offset={0.9}
            sticky={{ start: 1, end: 2 }}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {isHeroOpen ? (
              <div className="modal" onClick={() => modalHeroHandler("closed")}>
                <ExpandedOrb modal={modalHero} />
              </div>
            ) : (
              <div className="hero" onClick={() => modalHeroHandler("hero")}>
                <Orb title="What is it?" modal={modalHero} />
              </div>
            )}
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={2}
            // style={{ backgroundColor: "#ff6d6d" }}
          >
            <img src={rocket} alt="winner rocket" className="rocket"></img>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.5}
            sticky={{ start: 3, end: 4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {isSecOpen ? (
              <div className="modal" onClick={() => modalSecHandler("closed")}>
                <ExpandedOrb modal={modalSec} />
              </div>
            ) : (
              <div
                className="secondary"
                onClick={() => modalSecHandler("secondary")}
              >
                <Orb title="How do I play?" modal={modalSec} />
              </div>
            )}
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.5}
            speed={2}
            // style={{ backgroundColor: "#ff6d6d" }}
          >
            <img src={trolley} alt="prize trolley" className="trolley"></img>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {isAftOpen ? (
              <div className="modal" onClick={() => modalAftHandler("closed")}>
                <ExpandedOrb modal={modalAft} />
              </div>
            ) : (
              <div
                className="afterthought"
                modal={modalAft}
                onClick={() => modalAftHandler("afterthought")}
              >
                <Orb title="Thank you" />
              </div>
            )}
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Landing;
