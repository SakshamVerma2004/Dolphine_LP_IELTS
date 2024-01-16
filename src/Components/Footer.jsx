import styles from "../Styles/Footer.module.css";
import gridBg from "../Assets/grid-background-image.webp";
import logo from "../Assets/logo.png";
import phone from "../Assets/phone-svgrepo-com.svg";
import location from "../Assets/location-pin-svgrepo-com.svg";
import { useState } from "react";
let Footer = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);
  let [showError, setShowError] = useState(false);
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
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError(true);
        }
      });
  };
  return (
    <>
      <div
        className={styles.footer}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(254, 205, 165, 0.1), rgba(254, 205, 165, 0.1)), url(${gridBg})`,
        }}
      >
        <div className={styles.containerFooter}>
          <div>
            <img className={styles.logo} src={logo} />
            <p>
              Our English Speaking Course in Chandigarh is tailored to improve
              your overall personality by improving your speaking skills and
              allowing you to explore the outside world with confidence.
            </p>
          </div>
          <div>
            <h3>Links</h3>
            <div className={styles.footerLinksSection}>
              <img src={phone} className={styles.footerSvg} />
              <a
                href="tel:9780754465"
                style={{ textDecoration: "none", color: "#7a7a7a" }}
              >
                <p>9780754465</p>
              </a>
            </div>
            <div className={styles.footerLinksSection}>
              <img src={location} className={styles.footerSvg} />
              <p>SCO: 85-86, 2nd Floor Sector 34-A Chandigarh, 160022</p>
            </div>
          </div>
          <div className={styles.footerFormSection}>
            <h3>Get a Call Back</h3>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!showError ? (
              <input
                placeholder="Phone Number"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            ) : (
              <p
                style={{ color: "red", textAlign: "center", fontSize: "13px" }}
              >
                Something Went Wrong, please try again later.
              </p>
            )}
            {!showSuccess ? (
              <button className={styles.submitBtn} onClick={submitHandler}>
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
          </div>
        </div>
      </div>
      <div className={styles.footerBottomSection}>
        <p>© Copyright © 2023 Dolphin Head Hunters</p>
      </div>
    </>
  );
};

export default Footer;
