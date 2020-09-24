import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__wrapper" id="getstarted">
      <div className="container__">
        <div className="footer__upper">
          <div className="ui stackable grid">
            <div className="eight wide column left__align">
              <div className="get__app">
                <div className="heading">
                  <h3>Get the app today</h3>
                </div>
                <div className="content">
                  Minderz aims to build a community dedicated to pets and to
                  make pet parenting an easier, happier & memorable journey for
                  all.
                </div>
                <div className="download-links">
                  <a
                    href="https://play.google.com/store/apps/details?id=app.reftek.minderz"
                    target="_blank"
                  >
                    <img src="images/blue-google.svg" alt="play store" />
                  </a>

                  <a
                    href="https://apps.apple.com/za/app/minderz/id1495784830"
                    target="_blank"
                  >
                    <img src="images/blue-ios.svg" alt="play store" />
                  </a>
                </div>
              </div>
            </div>
            <div className="eight wide column hide-mobile">
              <div className="footer__phone">
                <img src="images/footer-phone.png" alt="footer phone" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__lower">
          <div className="heading">
            <h2>Join Our community</h2>
            <span>
              Subscribe to our mailing list for pet care tips and product
              offers.
            </span>
          </div>
          <div className="newsletter__wrapper">
            <div className="ui two column grid input">
              <div className="twelve wide column left__align">
                <input type="text" placeholder="Enter Your Email here" />
              </div>
              <div className="four wide column">
                <button className="hide-mobile">Subscribe</button>
                <img
                  src="images/submit-img.svg"
                  className="hide-desktop"
                  alt="submit img"
                />
              </div>
            </div>
          </div>
          <div className="policies hide-mobile">
            <div className="ui three column grid">
              <div className="column">
                <Link to="/">
                  {" "}
                  <span>Privacy Policy</span>
                </Link>
              </div>
              <div className="column">
                <Link to="/terms">
                  {" "}
                  <span>Terms of Use</span>
                </Link>
              </div>
              <div className="column">
                <Link to="/">
                  <span>License Agreement</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="media__icons">
            <a href="facebook.com">
              <img src="images/facebook.svg" alt="facebook" />
            </a>
            <a href="instagram.com">
              <img src="images/instagram.svg" alt="instagram" />
            </a>
            <a href="linkedin.com">
              <img src="images/linkedin.svg" alt="linkedin" />
            </a>
            <a href="twitter.com">
              <img src="images/twitter.svg" alt="twitter" />
            </a>
          </div>
          <div className="copyright">
            <span>2020 All Rights Reserved Minderz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;