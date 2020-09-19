import React from "react";
import Nav from "../nav/Nav";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <Nav />
      <div className="hero__content container__">
        <div className="ui stackable grid">
          <div className="eight wide column align__left">
            <div className="wrapper">
              <div className="caption__header">
                <h1>
                  Your Pet Care <br /> Journey Companion
                </h1>
              </div>
              <div className="caption__content hide-mobile">
                We are a community dedicated to pets. Minderz makes it easy for
                pet parents to connect, share experiences, learn and find
                trusted and insured service providers across the country ready
                to care for their pet.
              </div>
              <div className="download-links">
                <a
                  href="https://play.google.com/store/apps/details?id=app.reftek.minderz"
                  target="_blank"
                >
                  <img src="images/pink-ios.svg" alt="play store" />
                </a>

                <a
                  href="https://apps.apple.com/za/app/minderz/id1495784830"
                  target="_blank"
                >
                  <img src="images/pink-google.svg" alt="app store" />
                </a>
              </div>
            </div>
          </div>
          <div className="eight wide column">
            <div className="wrap__phone">
              <img src="images/phones.png" alt="phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
