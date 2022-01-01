import React, { useState } from "react";
import ExpandedOrb from "../components/ExpandedOrb/ExpandedOrb";
import Orb from "../components/Orb/Orb";
import logo from "./../assets/logo/ab-logo-white.png";
import "./landing.css";

const Landing = () => {
  const [modal, setModal] = useState("closed");
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = (modal) => {
    setIsOpen(!isOpen);
    setModal(modal);
  };

  return (
    <>
      <div className="landing">
        {isOpen ? (
          <>
            <div className="modal" onClick={() => modalHandler("closed")}>
              <ExpandedOrb modal={modal} />
            </div>
          </>
        ) : (
          <>
            <div className="hero" onClick={() => modalHandler("hero")}>
              <Orb title="What is it?" modal={modal} />
            </div>
            <div
              className="secondary"
              onClick={() => modalHandler("secondary")}
            >
              <Orb title="How do I play??" modal={modal} />
            </div>
            <div
              className="afterthought"
              modal={modal}
              onClick={() => modalHandler("afterthought")}
            >
              <Orb title="Thank you" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Landing;
