import styles from "../Styles/Form.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
let Form = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);
  let [showError, setShowError] = useState(false);
  let { showForm, setShowForm } = useContext(AuthContext);
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
        setTimeout(() => {
          setShowForm(false);
        }, 3000);
        return res.json();
      })
      .catch((err) => {
        if (err) {
          setShowError(true);
        }
      });
  };
  return (
    <div className={styles.form}>
      <div className={styles.containerForm}>
        <div className={styles.closeSectionDiv}>
          <div
            className={styles.closeSection}
            onClick={() => setShowForm(false)}
          >
            <img src={close} />
          </div>
        </div>
        <h3>Register For A Demo Class</h3>
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
          <p style={{ color: "red", fontSize: "13px", textAlign: "center" }}>
            Something Went Wrong, Please try again later.
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

export default Form;
