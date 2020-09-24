import React, { useState } from "react";

const Services = () => {
  const [boarding, setBoarding] = useState(true);
  const [walking, setWalking] = useState(true);
  const [visits, setVisits] = useState(true);
  const [sitting, setSitting] = useState(true);
  const [training, setTraining] = useState(true);
  const [grooming, setGrooming] = useState(true);

  const boardingHover = () => {
    setBoarding(true);
  };

  return (
    <div className="services__wrapper container__" id="services">
      <div className="services___">
        <div className="heading">
          <h1>Services for every dog and cat</h1>
        </div>
        <div className="services">
          <div className="ui three column stackable grid">
            <div className="column">
              <div
                className="wrap__image"
                onMouseEnter={() => setBoarding(false)}
                onMouseLeave={() => setBoarding(true)}
              >
                {boarding && <div className="caption_bold">PET BOARDING</div>}
                {!boarding && (
                  <div className="caption_normal">
                    If you need overnight pet care at the sitters home
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div
                className="wrap__image1"
                onMouseEnter={() => setWalking(false)}
                onMouseLeave={() => setWalking(true)}
              >
                {walking && <div className="caption_bold">DOG WALKING</div>}
                {!walking && (
                  <div className="caption_normal">
                    For whenever your dog needs a walk
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div
                className="wrap__image2"
                onMouseEnter={() => setVisits(false)}
                onMouseLeave={() => setVisits(true)}
              >
                {visits && <div className="caption_bold">DROP-IN-VISITS</div>}
                {!visits && (
                  <div className="caption_normal">
                    For check-ins and playdates during the day
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div
                className="wrap__image3"
                onMouseEnter={() => setSitting(false)}
                onMouseLeave={() => setSitting(true)}
              >
                {sitting && <div className="caption_bold">HOUSE-SITTING</div>}
                {!sitting && (
                  <div className="caption_normal">
                    This is great if you need overnight pet of house-sitting
                    services
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div
                className="wrap__image4"
                onMouseEnter={() => setTraining(false)}
                onMouseLeave={() => setTraining(true)}
              >
                {training && <div className="caption_bold">DOG TRAINING</div>}
                {!training && (
                  <div className="caption_normal">
                    By trainers who use positive reinforcement and are
                    registered
                  </div>
                )}
              </div>
            </div>
            <div className="column">
              <div
                className="wrap__image5"
                onMouseEnter={() => setGrooming(false)}
                onMouseLeave={() => setGrooming(true)}
              >
                {grooming && <div className="caption_bold"> GROOMING</div>}
                {!grooming && (
                  <div className="caption_normal">
                    For basic dog washing, brushing and clipping services
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="promises">
        <div className="promises___">
          <div className="heading">
            <h1>Our peace of mind promise</h1>
            <span className="peace__caption">
              We go the extra mile to ensure your pets’ safety and your peace of
              mind.
            </span>
          </div>
          <div className="actual__promise">
            <div className="ui three column stackable grid">
              <div className="column">
                <div className="wrap__icon">
                  <img src="images/delivery.svg" alt="delivery" />
                </div>
                <h2>24/7 Customer Support</h2>
                <div className="content">
                  We’re here for you via phone and email whenever you need it.
                </div>
              </div>
              <div className="column">
                <div className="wrap__icon">
                  <img src="images/premium.svg" alt="premium" />
                </div>
                <h2>Premium Insurance</h2>
                <div className="content">
                  Every reservation made through our mobile app is covered.
                </div>
              </div>
              <div className="column">
                <div className="wrap__icon">
                  <img src="images/calendar.svg" alt="calendar" />
                </div>
                <h2>Daily Updates</h2>
                <div className="content">
                  So you can know how much fun your pet is having while you’re
                  away.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
