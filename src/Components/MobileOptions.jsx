import styles from "../Styles/MobileOptions.module.css";
import call from "../Assets/call_FILL1_wght400_GRAD0_opsz24.svg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
let MobileOptions = () => {
  let { showForm, setShowForm } = useContext(AuthContext);
  return (
    <div className={styles.mobileOptions}>
      <div className={styles.containerMobileOptions}>
        <button onClick={() => setShowForm(true)}>
          Request for Demo Class
        </button>
        <a href="tel:9780754465">
          <img src={call} />
        </a>
      </div>
    </div>
  );
};

export default MobileOptions;
