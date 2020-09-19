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
            Minderz is much more than a Pet Social Network! We connect pet
            parents with like-minded people and create a safe space for them to
            share their pet parenting journey. We provide them with tools that
            help them track and manage the health and wellness of their pets.
          </p>
        </Collapsible>
        <Collapsible trigger="How does it work?">
          <p>
            Minderz is much more than a Pet Social Network! We connect pet
            parents with like-minded people and create a safe space for them to
            share their pet parenting journey. We provide them with tools that
            help them track and manage the health and wellness of their pets.
          </p>
        </Collapsible>
        <Collapsible trigger="Can we refund at any time?">
          <p>
            Minderz is much more than a Pet Social Network! We connect pet
            parents with like-minded people and create a safe space for them to
            share their pet parenting journey. We provide them with tools that
            help them track and manage the health and wellness of their pets.
          </p>
        </Collapsible>
        <Collapsible trigger="What if I have more questions?">
          <p>
            Minderz is much more than a Pet Social Network! We connect pet
            parents with like-minded people and create a safe space for them to
            share their pet parenting journey. We provide them with tools that
            help them track and manage the health and wellness of their pets.
          </p>
        </Collapsible>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
