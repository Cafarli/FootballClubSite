import React from "react";
import "./awards.css";
import { SlideSwiper } from "../SlideSwiper/slideSwiper";

export function Awards() {
  // const awards_title = [
  //       { subtitle: 'World Cup Champion', active: true },
  //       { subtitle: 'World Cup Champion', active: false },
  //       { subtitle: 'World Cup Champion', active: false },
  //       { subtitle: 'World Cup Champion', active: false },
  //       { subtitle: 'World Cup Champion', active: false },
  //       { subtitle: 'World Cup Champion', active: false },
  //       { subtitle: 'World Cup Champion', active: false }
  //     ];

  const awards = {
    images: [
      {
        photo:
          "https://toppng.com/uploads/preview/820-x-1222-1-fa-cup-trophy-11562894443sywctj4iru.png",
      },
      {
        photo:
          "https://www.pngkey.com/png/detail/526-5261982_soccer-trophy-cup-clipart-trophy-world-cup-football.png",
      },
      {
        photo:
          "https://www.pngitem.com/pimgs/m/569-5697592_fifa-club-world-cup-hd-png-download.png",
      },
      {
        photo:
          "https://i.pinimg.com/originals/d4/71/f4/d471f43c6727b2a4d969742b0d786eee.png",
      },
      { photo: "https://m.media-amazon.com/images/I/41rbmuhF+yL.jpg" },
      { photo: "https://m.media-amazon.com/images/I/61UGyq3eqZL.jpg" },
    ],
  };

  return (
    <div className="about-awards section">
      <h1 className="about-award-h1">
        OUR <span>AWARDS</span>
      </h1>
      <div className="about-awards-text">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia{" "}
        </p>
      </div>
      <div className="about-awards-photos">
        <SlideSwiper props={awards} />
      </div>
    </div>
  );
}
