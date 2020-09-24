import React from "react";
import Collapsible from "react-collapsible";
import Footer from "../home/footer/Footer";
import Nav from "../home/nav/Nav";

const Faq = () => {
  return (
    <div>
      <div className="short__hero">
        <Nav />

        <div className="heading container__">
          <h1>FAQS</h1>
        </div>
      </div>
      <div className="accordion__header">
        <span>WE ANSWER YOUR QUESTIONS</span>
        <div className="heading">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="wrap__accordion">
        <Collapsible trigger="What is Minderz?">
          <p>
            A: Minderz is a social network for pets with a self-service platform
            for finding trusted and insured pet services such as pet sitting.
            Both boarding with a host family (ideal for dogs) and home visits
            (ideal for cats), as well as other pet-related services such as dog
            walking and day training and dog grooming, are available.
          </p>
        </Collapsible>
        <Collapsible trigger="How can I find a service provider?">
          <p>
            A: Whether you are looking for a dog walker, a cat sitter, you have
            come to the right place. <br />
            Here's how to find your sitter: <br />
            1) Download the Minderz mobile App for either your Apple or Android
            device, register an account as a pet owner and add a pet. <br />
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
            This way, you and service provider both demonstrate a high level of
            commitment to the booking arrangement, are both protected in case of
            cancellation and will enjoy peace of mind knowing the customer
            service team is there to help at any time. Most importantly, a
            booking is only covered by Minderz if it is confirmed and paid for
            through the Minderz app.
          </p>
        </Collapsible>

        <Collapsible trigger="When do I need to pay?">
          <p>
            A: Once the service provider you have requested accepts your
            booking, then you have to pay in order to secure the booking.
          </p>
        </Collapsible>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
