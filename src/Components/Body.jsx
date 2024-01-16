import styles from "../Styles/Body.module.css";
import gridBg from "../Assets/grid-background-image.webp";
import grid1 from "../Assets/grid-1.png";
import grid2 from "../Assets/grid-2.png";
import grid3 from "../Assets/grid-3.png";
import brochureBg from "../Assets/downloadBrochureBg.jpg";
import whyChooseImage from "../Assets/whychooseusImage.jpg";
import ieltsImg from "../Assets/aboutIELTSImg.jpg";
import journeyBg from "../Assets/journeyBg.jpg";
import demoClasses from "../Assets/demoClassesImg.jpg";
import redTick from "../Assets/check-mark-svgrepo-com.svg";
import festiveImg from "../Assets/festiveSeasonImg.jpg";
import slider1 from "../Assets/sliderImg1.jpg";
import slider2 from "../Assets/sliderImg2.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import DHHBrochure from "../Assets/DHHBrochure.pdf";
import contactImg from "../Assets/contactImg.jpg";
let Body = () => {
  let [showAnswer1, setShowAnswer1] = useState(false);
  let [showAnswer2, setShowAnswer2] = useState(false);
  let [showAnswer3, setShowAnswer3] = useState(false);
  let [showAnswer4, setShowAnswer4] = useState(false);
  let [showAnswer5, setShowAnswer5] = useState(false);
  let [showAnswer6, setShowAnswer6] = useState(false);
  let [showAnswer7, setShowAnswer7] = useState(false);
  let [sliderImage, setSliderImage] = useState(slider1);
  let [imageChanged, setImageChanged] = useState(false);
  let { showForm, setShowForm, showForm2, setShowForm2 } =
    useContext(AuthContext);
  let [formSubmitted, setFormSubmitted] = useState(false);
  let [formSubmitted2, setFormSubmitted2] = useState(false);
  let [formSubmitted3, setFormSubmitted3] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);
  let [showError, setShowError] = useState(false);
  let [name2, setName2] = useState("");
  let [email2, setEmail2] = useState("");
  let [phoneNumber2, setPhoneNumber2] = useState("");
  let [showSuccess2, setShowSuccess2] = useState(false);
  let [showError2, setShowError2] = useState(false);
  let [name3, setName3] = useState("");
  let [email3, setEmail3] = useState("");
  let [phoneNumber3, setPhoneNumber3] = useState("");
  let [showSuccess3, setShowSuccess3] = useState(false);
  let [showError3, setShowError3] = useState(false);
  let [name4, setName4] = useState("");
  let [email4, setEmail4] = useState("");
  let [phoneNumber4, setPhoneNumber4] = useState("");
  let [showSuccess4, setShowSuccess4] = useState(false);
  let [showError4, setShowError4] = useState(false);
  // useEffect(() => {
  //   if (sliderImage == slider1) {
  //     setTimeout(() => {
  //       setSliderImage(slider2);
  //       setImageChanged(true);
  //     }, 5000);
  //   } else {
  //     setTimeout(() => {
  //       setSliderImage(slider1);
  //       setImageChanged(true);
  //     }, 5000);
  //   }
  //   if (imageChanged) {
  //     setTimeout(() => {
  //       setImageChanged(false);
  //     }, 4000);
  //   }
  // }, [sliderImage, imageChanged]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSliderImage((prevImage) =>
        prevImage === slider1 ? slider2 : slider1
      );
      setImageChanged(true);
    }, 5000);
    let resetAnimation = () => {
      setImageChanged(false);
    };
    let animationTimeout = setTimeout(resetAnimation, 4000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(animationTimeout);
    };
  }, []);
  let submitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phoneNumber.trim()) {
      return;
    }
    fetch("https://rento-mojo-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      }),
    })
      .then((res) => {
        setShowSuccess(true);
        setFormSubmitted2(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError(true);
        }
      });
  };
  let submitHandler2 = (e) => {
    e.preventDefault();
    if (!name2.trim() || !email2.trim() || !phoneNumber2.trim()) {
      return;
    }
    fetch("https://rento-mojo-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name2,
        email: email2,
        phoneNumber: phoneNumber2,
      }),
    })
      .then((res) => {
        setShowSuccess2(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError2(true);
        }
      });
  };
  let submitHandler3 = (e) => {
    e.preventDefault();
    if (!name3.trim() || !phoneNumber3.trim()) {
      return;
    }
    fetch("https://rento-mojo-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name3,
        email: email3,
        phoneNumber: phoneNumber3,
      }),
    })
      .then((res) => {
        setShowSuccess3(true);
        setFormSubmitted3(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError3(true);
        }
      });
  };
  let submitHandler4 = (e) => {
    e.preventDefault();
    if (!name4.trim() || !phoneNumber4.trim()) {
      return;
    }
    fetch("https://rento-mojo-default-rtdb.firebaseio.com/cart.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name4,
        email: email4,
        phoneNumber: phoneNumber4,
      }),
    })
      .then((res) => {
        setShowSuccess4(true);
        setFormSubmitted(true);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError4(true);
        }
      });
  };
  return (
    <div className={styles.body}>
      <div className={styles.slider} id="home">
        <div
          className={styles.backgroundImageSliderSection}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30,0.7), rgba(30, 30, 30,0.7)), url(${sliderImage})`,
          }}
        ></div>
        <div className={styles.containerSlider}>
          <div className={styles.sliderHeadingSection}>
            <h1>Learn And Master IELTS With A Professional IELTS Tutor</h1>
            <p>IELTS Coaching in Chandigarh</p>
          </div>
          <div className={styles.sliderBrochureSection}>
            {!formSubmitted2 ? (
              <div>
                <form>
                  <h2>Download Brochure</h2>
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {!showError ? (
                    <input
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      type="number"
                    />
                  ) : (
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      Something Went Wrong , Please try again later.
                    </p>
                  )}
                  {!showSuccess ? (
                    <button
                      className={styles.submitBtn}
                      onClick={submitHandler}
                    >
                      SUBMIT NOW
                    </button>
                  ) : (
                    <p
                      style={{
                        color: "green",
                        fontSize: "13px",
                        textAlign: "center",
                      }}
                    >
                      Form Submitted Successfully.
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <a
                  onClick={() =>
                    setTimeout(() => {
                      setFormSubmitted2(false);
                    }, 5000)
                  }
                  href={DHHBrochure}
                  download={true}
                  style={{
                    textAlign: "center",
                    color: "green",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  Download Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.gridSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(254, 205, 165, 0.3), rgba(254, 205, 165, 0.3)), url(${gridBg})`,
        }}
      >
        <div className={styles.containerGridSection}>
          <div>
            <img src={grid1} />
            <h3>Learn Skills</h3>
            <p>with unlimited courses</p>
          </div>
          <div>
            <img src={grid2} />
            <h3>Expert Trainer</h3>
            <p>best & highly qualified</p>
          </div>
          <div>
            <img src={grid3} />
            <h3>Get Certificate</h3>
            <p>value all over the world</p>
          </div>
        </div>
      </div>
      <div
        className={styles.downloadBrochureSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.9), rgba(255, 255, 255,0.9)), url(${brochureBg})`,
        }}
      >
        <div className={styles.containerDownloadBrochureSection}>
          <h1>
            Download Free{" "}
            <span className={styles.brochureText}>
              <span className={styles.animationB}>B</span>
              <span className={styles.animationr}>r</span>
              <span className={styles.animationo}>o</span>
              <span className={styles.animationc}>c</span>
              <span className={styles.animationh}>h</span>
              <span className={styles.animationu}>u</span>
              <span className={styles.animationr2}>r</span>
              <span className={styles.animatione}>e</span>
            </span>
          </h1>
          {!formSubmitted3 ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              <input
                placeholder="Enter Your Name"
                value={name3}
                onChange={(e) => setName3(e.target.value)}
                required
              />
              {!showError3 ? (
                <input
                  placeholder="Enter Your Number"
                  value={phoneNumber3}
                  onChange={(e) => setPhoneNumber3(e.target.value)}
                  type="number"
                  required
                />
              ) : (
                <p
                  style={{
                    color: "red",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Something Went Wrong, please try again later.
                </p>
              )}
              {!showSuccess3 ? (
                <button
                  className={styles.downloadBrochureBtn}
                  onClick={submitHandler3}
                >
                  DOWNLOAD BROCHURE
                </button>
              ) : (
                <p
                  style={{
                    color: "green",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Form Submitted Successfully.
                </p>
              )}
              <p className={styles.agreePara}>
                I agree to ielts terms and privacy policy
              </p>
            </div>
          ) : (
            <a
              href={DHHBrochure}
              download={true}
              style={{
                color: "green",
                fontSize: "20px",
                textDecoration: "none",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Download Now
            </a>
          )}
        </div>
      </div>
      <div className={styles.callNowSection}>
        <div className={styles.containerCallNowSection}>
          <div className={styles.callNowHeadingSection}>
            <h4>Want to unveil new beginnings?</h4>
            <h4>Call us at 9780754465 today!</h4>
          </div>
          <button className={styles.callNowBtn}>
            <a href="tel:9780754465">CALL NOW</a>
          </button>
        </div>
      </div>
      <div className={styles.whyChooseSection} id="whychooseus">
        <div className={styles.containerWhyChooseSection}>
          <div className={styles.whyChooseHeadingSection}>
            <h5>WHY CHOOSE US</h5>
            <h3>
              IELTS Coaching In{" "}
              <span style={{ color: "#db2131" }}>Chandigarh?</span>
            </h3>
            <p>
              Given that we are the most well-known institute in the city,
              Dolphin Head Hunter is the preferred place for an IELTS Classes in
              Chandigarh. All of our instructors have years of experience
              teaching and are highly proficient. Our institution employs
              cutting-edge, engaging approaches for the kids. Moreover, we place
              persistent efforts on education. Our primary purpose is to
              facilitate students’ growth as they work toward their objectives.
              We are a top IELTS Institute in Chandigarh and an ideal
              destination for your preparation.
            </p>
          </div>
          <div className={styles.whyChooseImageSection}>
            <img src={slider2} />
          </div>
        </div>
      </div>
      <div
        className={styles.startJourneySection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30,0.7), rgba(30, 30, 30,0.7)), url(${slider2})`,
        }}
      >
        <div className={styles.containerStartJourneySection}>
          <div className={styles.headingStartJourneySection}>
            <h3>
              Experienced and Qualified Staff of Tutors for IELTS Preparation
            </h3>
          </div>
          <button
            className={styles.joinNowButton}
            onClick={() => setShowForm2(true)}
          >
            JOIN NOW
          </button>
        </div>
      </div>
      <div className={styles.demoClassesSection} id="about">
        <div className={styles.containerDemoClassesSection}>
          <div className={styles.demoClassesImageSection}>
            <img src={demoClasses} />
          </div>
          <div className={styles.demoClassesTextSection}>
            <h1>
              Embark On Your Journey To Success With{" "}
              <span style={{ color: "#db2131" }}>Dolphin Head Hunters</span>
            </h1>
            <p className={styles.mainParaDemoClasses}>
              Spoken English has become a crucial skill that is recognised and
              appreciated all around the world. It has become the basis of
              communication for people from different countries. Dolphin Head
              Hunters is a prestigious and well-known educational institution
              that offers top-notch classroom preparation programmes for
              language skill assessment and growth. Dolphin Head Hunters is a
              significant educational institution with branches throughout
              Chandigarh, Punjab, Haryana, and neighbouring areas. Join our
              institute, which is regarded as one of the most dominant names in
              terms of top results, if you are considering beginning your IELTS
              test preparation in the near future. Each of the centres we own
              employs a dedicated methodology, a faculty that is highly
              qualified and experienced, and a committed approach. We have
              developed innovative and transforming training programs for
              students, professionals, and non-professionals to make them
              competitive in their future endeavours.
            </p>
            <button
              className={styles.registerButton}
              onClick={() => setShowForm(true)}
            >
              Register for Demo Class
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.downloadBrochureSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255,0.9), rgba(255, 255, 255,0.9)), url(${brochureBg})`,
        }}
      >
        <div className={styles.containerDownloadBrochureSection}>
          <h1 className={styles.reserveConsultation}>
            Reserve Your Free{" "}
            <span className={styles.brochureText}>
              <span className={styles.animationB}>C</span>
              <span className={styles.animationB}>o</span>
              <span className={styles.animationB}>n</span>
              <span className={styles.animationB}>s</span>
              <span className={styles.animationB}>u</span>
              <span className={styles.animationB}>l</span>
              <span className={styles.animationB}>t</span>
              <span className={styles.animationB}>a</span>
              <span className={styles.animationB}>t</span>
              <span className={styles.animationB}>i</span>
              <span className={styles.animationB}>o</span>
              <span className={styles.animationB}>n</span>
            </span>{" "}
            Slot
          </h1>
          <input
            placeholder="Enter Your Name"
            value={name4}
            onChange={(e) => setName4(e.target.value)}
            required
          />
          {!showError4 ? (
            <input
              placeholder="Enter Your Number"
              value={phoneNumber4}
              onChange={(e) => setPhoneNumber4(e.target.value)}
              type="number"
              required
            />
          ) : (
            <p style={{ color: "red", fontSize: "13px", textAlign: "center" }}>
              Something Went Wrong, please try again later.
            </p>
          )}
          {!showSuccess4 ? (
            <button
              className={styles.downloadBrochureBtn}
              onClick={submitHandler4}
            >
              REQUEST CALLBACK
            </button>
          ) : (
            <p
              style={{ color: "green", fontSize: "13px", textAlign: "center" }}
            >
              Form Submitted Successfully.
            </p>
          )}
          <p className={styles.agreePara}>
            I agree to ielts terms and privacy policy
          </p>
        </div>
      </div>
      <div
        className={styles.whyChooseSection}
        id="whychooseus"
        style={{ marginTop: "70px" }}
      >
        <div className={styles.containerWhyChooseSection} id="aboutIELTS">
          <div className={styles.whyChooseHeadingSection}>
            <h3>
              All You Need To Know About{" "}
              <span style={{ color: "#db2131" }}>IELTS</span>
            </h3>
            <p>
              International students and workers who want to study or work in a
              nation where English is the predominant language of communication
              must take the IELTS English language test. The United States,
              Canada, Australia, and New Zealand are the most frequent countries
              for college and university admissions based on IELTS results. IDP
              Education Australia and Cambridge English Language jointly owned
              and administered the IELTS test. Over 3.5 million people gave
              IELTS for migrations and studies in 2021, and for people prepping
              for IELTS, Dolphin Head Hunters is the leading name for IELTS
              coaching in Chandigarh. Dolphin Head Hunters is a top IELTS
              Institute in Chandigarh, with over a decade of experience tutoring
              hardworking individuals to make their dreams come true. This top
              IELTS Coaching Centre in Chandigarh was established in 2009 and,
              from then on, has facilitated the growth of several individuals
              over the years. Dolphin head hunters is an ideal coaching
              institute for IELTS and also provides several other services like
              personality development, PTE prep and interview preparation
              classes. Our goal is to transform the lives of learners through
              our efforts in our best IELTS Coaching Classes in Chandigarh.
            </p>
            <button
              className={styles.registerButton}
              onClick={() => setShowForm(true)}
            >
              Register for Demo Class
            </button>
          </div>
          <div className={styles.whyChooseImageSection}>
            <img src={ieltsImg} />
            <div className={styles.bestSection}>
              <h3>WE'RE THE BEST INSTITUTION</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preparationSection}>
        <div className={styles.containerPreparation}>
          <h1>
            A Prestigious Institute for{" "}
            <span style={{ color: "#db2131" }}>IELTS</span> Preparation and
            Development
          </h1>
          <p>
            Since the beginning, Dolphin Head Hunters has been committed to
            assisting all applicants in reaching their highest potential, and we
            accomplish this by providing the finest IELTS tutoring in
            Chandigarh. One has to have a strong command of English to relocate
            to a new English-speaking nation for education or permanent
            residency. Therefore individuals need to learn the English language,
            and Dolphin Head Hunters are the ideal choice for the IELTS
            Institute in Chandigarh. Our primary goal is to increase people’s
            English language skills; to do so, we are prepared to go above and
            beyond what our aspirants anticipate. As the best IELTS coaching
            institute in Chandigarh, we also prioritize developing the
            personalities of each person visiting us and enabling them to
            further pursue their dream of studying abroad. This is why we are
            the optimal destination for IELTS Preparation in Chandigarh.
          </p>
        </div>
      </div>
      <div className={styles.festiveSeasonSection}>
        <div className={styles.containerFestiveSeasonSection}>
          <div className={styles.festiveSeasonHeadingBlock}>
            <h2>Festive Season Offer</h2>
            <div className={styles.uptoSection}>
              <div></div>
              <h3>UPTO</h3>
              <div></div>
            </div>
            <h1 className={styles.twentyPercentHeading}>20% OFF</h1>
            <h3>SUBMIT AND GET YOUR SPECIAL DISCOUNT</h3>
            <button
              className={styles.registerForDemoBtn}
              onClick={() => setShowForm(true)}
            >
              Register for Demo Class
            </button>
          </div>
          <div className={styles.festiveSeasonImageBlock}>
            <img src={festiveImg} />
          </div>
        </div>
      </div>
      <div className={styles.internalKnowledgeSection}>
        <div className={styles.containerInternalKnowledgeSection}>
          <h1>
            In-Depth Knowlege About the Criterias Necessary to Crack the{" "}
            <span style={{ color: "#db2131" }}>IELTS</span> Examination
          </h1>
          <p>
            The International English Language and Testing System or IELTS have
            become one of the significant criteria for screening individuals who
            want to migrate to countries with English as a native language.
            IELTS is one of the most recognized tests in the world, and millions
            of people give this test to become eligible to travel across the
            globe to different countries. Many students pass this test to
            migrate to foreign countries like Canada, America, or New Zealand to
            pursue their careers. The IELTS examination assesses the following
            four significant skills in a person.
          </p>
          <div className={styles.internalGridSection}>
            <div>
              <h1>Writing</h1>
              <p>
                It is necessary to have good writing skills to express your
                ideas or respond appropriately when faced with a general
                situation. The writing test evaluates the proper use of
                vocabulary and grammar.
              </p>
            </div>
            <div>
              <h1>Speaking</h1>
              <p>
                The person must talk about some general topics about their
                backgrounds, and based on the responses, the examiner will grade
                the person’s speaking skills.
              </p>
            </div>
            <div>
              <h1>Recording</h1>
              <p>
                The person is asked to listen to four different recordings on
                different matters in the native language. After listening, some
                basic questions will be asked based on the individual’s answers
                they are evaluated.
              </p>
            </div>
            <div>
              <h1>Reading</h1>
              <p>
                The person is provided with reading material from the native
                country, and after reading the material, the person is asked
                questions based on their understanding of the material.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.contactSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(219, 33, 49, 0.95), rgba(219, 33, 49, 0.95)), url(${contactImg})`,
        }}
      >
        <div className={styles.containerContactSection} id="contact">
          <h1>Feel free to contact Dolphin Head Hunters</h1>
          <p>Name: Dolphin Head Hunters</p>
          <p>
            Address: SCO: 85-86, 2nd Floor Sector 34-A Chandigarh 160022 India
          </p>
          <button onClick={() => setShowForm2(true)}>Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
