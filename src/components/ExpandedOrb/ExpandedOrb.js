import React from "react";

import "./ExpandedOrb.css";

const ExpandedOrb = ({ modal }) => {
  if (modal === "hero") {
    return (
      <>
        <div className="expandedOrb">
          <div className="infoContainer">
            <h2>What is Astrology Bingo?</h2>
            <p>
              The world’s first ever cosmic game show for astrology lovers,
              bingo wingers and their sceptic friends. The night revolves around
              a bingo game in which participants count their lucky stars and
              play bingo with their astrological birth chart!
            </p>
            <p>
              Available for booking as cabaret theatre show or a digital
              experience
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
            We may have dates coming up in your area! Check{" "}
            <a href="https://www.figsinwigs.com/live-1">here</a>.
          </p>
          <p>
            Or if you would like to talk about booking the show, online or IRL,
            get in touch with Fig Producer{" "}
            <a href="mailto:jennypearce@figsinwigs.com">Jenny</a>.
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
