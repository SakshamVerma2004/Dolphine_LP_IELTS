import styles from "../Styles/Form2.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
let Form2 = () => {
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
    fetch("https://dhh-lp-default-rtdb.firebaseio.com/ielts/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        date: new Date().toDateString(),
        time_HH_MM_SS: new Date().toLocaleTimeString(),
      }),
    })
      .then((res) => {
        setShowSuccess(true);
        setTimeout(() => {
          setShowForm2(false);
        }, 3000);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError(true);
        }
      });
  };
  let { showForm2, setShowForm2 } = useContext(AuthContext);
  return (
    <div className={styles.form}>
      <div className={styles.containerForm}>
        <div className={styles.closeSectionDiv}>
          <div
            className={styles.closeSection}
            onClick={() => setShowForm2(false)}
          >
            <img src={close} />
          </div>
        </div>
        <h3>Join Us</h3>
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        ) : (
          <p style={{ color: "red", fontSize: "13px", textAlign: "center" }}>
            Something Went Wrong, please try again later.
          </p>
        )}
        {!showSuccess ? (
          <button className={styles.submitBtn} onClick={submitHandler}>
            SUBMIT NOW
          </button>
        ) : (
          <p style={{ color: "green", fontSize: "13px", textAlign: "center" }}>
            Form Submitted Successfully.
          </p>
        )}
      </div>
    </div>
  );
};

export default Form2;
