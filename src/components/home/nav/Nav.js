import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <div className="container__">
        <div className="ui grid">
          <div className="three wide column left__align hide-mobile">
            <div className="wrap__logo">
              <Link to="/">
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="sixteen wide column hide-desktop ">
            <div className="wrap__logo">
              <Link to="/">
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="six wide column hide-mobile"></div>
          <div className="seven wide column hide-mobile">
            <div className="ui five column grid nav__links">
              <div className="column">
                <AnchorLink href="#services">Services</AnchorLink>
              </div>

              <div className="column">
                <AnchorLink href="#features">Features</AnchorLink>
              </div>
              <div className="column">
                <Link to="/faq">Faq</Link>
              </div>
              <div className="column">Blog</div>
              <div className="column clear__padding">
                <AnchorLink href="#getstarted">
                  <button>Get Started</button>
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
