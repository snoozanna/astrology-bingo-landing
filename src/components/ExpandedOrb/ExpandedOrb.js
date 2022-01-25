import React from "react";

import "./ExpandedOrb.css";

const ExpandedOrb = ({ modal }) => {
  if (modal === "hero") {
    return (
      <>
        <div className="expandedOrb">
          <div className="infoContainer">
            <h2 className="orbTitle">What is Astrology Bingo?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cump sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
        </div>
      </>
    );
  } else if (modal === "secondary") {
    return (
      <div className="expandedOrb">
        <div className="infoContainer">
          <h2>How do I play Astrology Bingo?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cump sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </div>
      </div>
    );
  } else if (modal === "afterthought") {
    return (
      <div className="expandedOrb">
        <div className="infoContainer">
          <h2>Credits</h2>
          <span>Concept by Figs in Wigs </span>
          <span>Performance by Figs in Wigs</span>
          <span>
            Astrology Bingo software by Suzanna Hurst and James Sherry (The
            Jump)
          </span>
          <span>Thank you to flatlib for astrology data</span>{" "}
          <span>Design by Kaiya Waerea </span>
        </div>
      </div>
    );
  } else if (modal === "closed") {
    return (
      <div className="expandedOrb">
        <div className="infoContainer">
          <h2>Thank you to</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cump sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
        </div>
      </div>
    );
  }
};

export default ExpandedOrb;
