import React, { useState } from "react";
import Collapsible from "react-collapsible";
const Features = () => {
  const [boarding, setBoarding] = useState(true);

  return (
    <>
      <div className="features__wrapper container__" id="features">
        <div className="features___">
          <div className="heading">
            <h1>Experience Awesome Features</h1>
          </div>
          <div className="features__content">
            <div className="ui stackable grid">
              <div className="eight wide column left__align">
                <div className="feature__phone">
                  <img src="images/feature-phone.png" alt="feature" />
                </div>
              </div>
              <div className="eight wide column">
                <div className="ui one column grid">
                  <div className="column">
                    <div className="ui two column stackable grid">
                      <div className="four wide column sixteen  mobile column img__icon left__align">
                        <img src="images/community.svg" alt="community" />
                      </div>
                      <div className="twelve wide column sixteen  mobile column left__align">
                        <div className="data">
                          <h3>Community</h3>
                          <div className="caption">
                            Find & Connect with Pets & other Pet Parents in your
                            neighbourhood. Share pictures of your experiences
                            and special moments with your pets.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui two column stackable grid">
                      <div className="four wide column sixteen mobile column img__icon left__align">
                        <img src="images/services.svg" alt="services" />
                      </div>
                      <div className="twelve wide column sixteen mobile column left__align">
                        <div className="data">
                          <h3>Services</h3>
                          <div className="caption">
                            Find and book reliable service providers like dog
                            walkers, sitters, groomers and trainers.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui two column stackable grid">
                      <div className="four wide column sixteen  mobile column img__icon left__align">
                        <img src="images/track.svg" alt="track" />
                      </div>
                      <div className="twelve wide column sixteen mobile column left__align">
                        <div className="data">
                          <h3>Track</h3>
                          <div className="caption">
                            Medical, Vaccinations, Weight, Exercise, Nutrition &
                            More! Receive Reminders for medication, training,
                            feeding and grooming.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui two column stackable grid">
                      <div className="four wide column sixteen  mobile column img__icon left__align">
                        <img src="images/petpedia.svg" alt="track" />
                      </div>
                      <div className="twelve wide column sixteen mobile column left__align">
                        <div className="data">
                          <h3>Petpedia</h3>
                          <div className="caption">
                            Find all information about all pet breeds. In-depth
                            information containing physical characteristics,
                            personality traits, diet, upbringing, etc.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui two column stackable grid">
                      <div className="four wide column sixteen  mobile column img__icon left__align">
                        <img src="images/lost-and-found.svg" alt="lost" />
                      </div>
                      <div className="twelve wide column sixteen  mobile column left__align">
                        <div className="data">
                          <h3>Lost and Found Pets</h3>
                          <div className="caption">
                            Post about your missing dog, cat or other types of
                            pet to people nearby that you know, include photos
                            of the pet, location and more information.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="furr__caption">
        <div className="ui stackable grid">
          <div className="eight wide column left__align">
            <div className="content">
              <h1>
                We are that second hand we all look for when caring for our
                furry babies
              </h1>
              <div className="caption">
                Whether you need reminders for cat care, help manageing your
                dog's vacination, or simply booking a reliable dog walker.
                Minders has everything you need to take the best daily care of
                your dog and cat in the most efficient way
              </div>
            </div>
          </div>
          <div className="eight wide column curly__cat hide-mobile">
            <img src="images/curly-cat.png" alt="cat image" />
            <a href="https://minderz-web.herokuapp.com/" target="_blank">
              <img src="images/play-btn.svg" className="play-btn" alt="play" />
            </a>
          </div>
          <div className="eight wide column curly__cat hide-desktop">
            <img src="images/doggy.png" alt="dog image" />
          </div>
        </div>
      </div>
      <div className="hide-desktop">
        <div className="accordion__header">
          <span>WE ANSWER YOUR QUESTIONS</span>
          <div className="heading">
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
        <div className="wrap__accordion">
          <Collapsible trigger="What is Minderz?">
            <p>
              A: Minderz is a social network for pets with a self-service
              platform for finding trusted and insured pet services such as pet
              sitting. Both boarding with a host family (ideal for dogs) and
              home visits (ideal for cats), as well as other pet-related
              services such as dog walking and day training and dog grooming,
              are available.
            </p>
          </Collapsible>
          <Collapsible trigger="How can I find a service provider?">
            <p>
              A: Whether you are looking for a dog walker, a cat sitter, you
              have come to the right place. <br />
              Here's how to find your sitter: <br />
              1) Download the Minderz mobile App for either your Apple or
              Android device, register an account as a pet owner and add a pet.{" "}
              <br />
              2) On the side menu bar, select the "service provider" option.{" "}
              <br />
              3) Select the pet(s) you would like taken care of by our service
              providers. <br />
              4) Choose the service you would like, type your city and/or suburb
              and set the price range. <br />
              5) Click on <b>Search</b>.
            </p>
          </Collapsible>
          <Collapsible trigger="How can I contact a service provider?">
            <p>
              A: Once a booking has been confirmed, you can contact a service
              provider for free using the Minderz App direct messaging feature.
              You will need to have paid for the booking first. Please note that
              the profiles do not include any contact details that will let you
              contact the service provider directly, such as phone numbers or
              email addresses. This is a conscious choice, as we wish to protect
              the privacy of the pet sitter by not publicly displaying those
              details.
            </p>
          </Collapsible>
          <Collapsible trigger="What is Minderz's cancellation policy?">
            <p>
              A: 50% refund if the pet owner cancels by 12:00pm (noon) one day
              before the service begins, and no refund for the cancelled days if
              cancelled after 12:00pm (noon) the day before the service begins.
            </p>
          </Collapsible>

          <Collapsible trigger="Can I pay the service provider directly or in cash?">
            <p>
              A: No, you need to make a reservation and pay via the mobile app.
              This way, you and service provider both demonstrate a high level
              of commitment to the booking arrangement, are both protected in
              case of cancellation and will enjoy peace of mind knowing the
              customer service team is there to help at any time. Most
              importantly, a booking is only covered by Minderz if it is
              confirmed and paid for through the Minderz app.
            </p>
          </Collapsible>

          <Collapsible trigger="When do I need to pay?">
            <p>
              A: Once the service provider you have requested accepts your
              booking, then you have to pay in order to secure the booking.
            </p>
          </Collapsible>
        </div>
      </div>
      <div className="pet__network container__ hide-mobile">
        <div className="network___">
          <div className="heading">
            <h1>Much More Than A Pet Social Network</h1>
          </div>
          <div className="app__screens">
            <div className="ui four column stackable grid">
              <div className="column down">
                <img src="images/phone-4.png" alt="app screen" />
              </div>
              <div className="column up">
                <img src="images/phone-2.png" alt="app screen" />
              </div>
              <div className="column down">
                <img src="images/phone-1.png" alt="app screen" />
              </div>
              <div className="column up">
                <img src="images/phone-3.png" alt="app screen" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vet__coming__soon container__">
        <div className="ui stackable grid">
          <div className="eight wide column">
            <img src="images/vet.png" alt="veterinarian" />
          </div>
          <div className="eight wide column left__align">
            <div className="coming__soon">
              <div className="heading">
                <h2>Minderz Vet (Coming Soon)</h2>
              </div>
              <div className="caption">
                Thanks to Minderz, vets will now have better insight into their
                patients (and their parents) than ever before; this includes
                ongoing access to medical records.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
