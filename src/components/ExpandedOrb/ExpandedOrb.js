import React, { useEffect } from "react";

import "./ExpandedOrb.css";

const ExpandedOrb = ({ modal }) => {
  //if modal status = open return more info
  //if modal status /= open return title
  // let title = "hi";
  // const returnContent = (modal) => {
  //   console.log("working out content");
  //   switch (modal) {
  //     case "hero":
  //       return <p>hero information</p>;
  //     case "secondary":
  //       return <p>secondary info</p>;
  //     case "afterthought":
  //     case "closed":
  //       return;
  //     default:
  //       console.log(`default case: modal provided was ${modal}`);
  //     // throw new Error("no modal status provided");
  //   }
  // };

  // // let content = returnContent();
  // // console.log(content);
  // // if (modal === "hero") {
  // //   console.log("modal is hero");
  // //   //   let title = "What is it?";
  // //   //   return title;
  // // }

  // useEffect(() => {
  //   returnContent(modal);
  //   return () => {};
  // }, [modal]);

  if (modal === "hero") {
    return (
      <>
        <div className="expandedOrbContainer">
          <h2 className="orbTitle">What is Astrology Bingo?</h2>
          <div className="expandedOrb">
            <div className="infoContainer">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cump sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu.
              </p>
            </div>
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
