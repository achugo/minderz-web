import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const [email_, setEmail] = useState("");
  const [emailRes, setEmailRes] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEmailRes("Please wait while we confirm your subscription...");
    axios({
      method: "post",
      url:
        "https://fierce-shore-33740.herokuapp.com/Infomallapi.infomall.ng/api/emails/send",
      data: {
        subject: "Newsletter Subscriber",
        message: `${email_} just subscribed to your newsletter`,
        senderid: "812ae6b1-3845-4f61-8f49-3651a689c995",
      },
    })
      .then((result) => {
        console.log("Success:", result);
        setEmailRes("You've sucessfully subscribed to our newsletter");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
                    <img src="images/blue-ios.svg" alt="play store" />
                  </a>

                  <a
                    href="https://apps.apple.com/za/app/minderz/id1495784830"
                    target="_blank"
                  >
                    <img src="images/blue-google.svg" alt="play store" />
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
            <form onSubmit={(e) => onFormSubmit(e)}>
              <div class="sg-response">{emailRes}</div>
              <div className="ui two column grid input">
                <div className="twelve wide column left__align">
                  <input
                    id="email"
                    type="email"
                    onChange={handleEmailChange}
                    placeholder="Enter Your Email here"
                    required
                  />
                </div>
                <div className="four wide column">
                  <button type="submit" className="hide-mobile">
                    Subscribe
                  </button>
                  <button className="hide-desktop" type="submit">
                    <img
                      src="images/submit-img.svg"
                      className="hide-desktop"
                      alt="submit img"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="policies hide-mobile">
            <div className="ui three column grid">
              <div className="column">
                <Link to="/privacy">
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
                <Link to="/license">
                  <span>License Agreement</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="media__icons">
            <a href="https://web.facebook.com/Minderzsa/" target="_blank">
              <img src="images/facebook.svg" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/minderzpets/" target="_blank">
              <img src="images/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/minderz/" target="_blank">
              <img src="images/linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://twitter.com/minderzsa" target="_blank">
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
