import styles from "../Styles/StickyTopBar.module.css";
import call from "../Assets/call_FILL1_wght400_GRAD0_opsz24.svg";
import nearMe from "../Assets/near_me_FILL1_wght400_GRAD0_opsz24.svg";
let StickyTopBar = () => {
  return (
    <div className={styles.stickyTopBar}>
      <div>
        <img src={call} />
        <p>0172-4005567 , 9780754465</p>
      </div>
      <div>
        <img src={nearMe} />
        <p>SCO: 85-86, 2nd Floor Sector 34-A Chandigarh 160022 India</p>
      </div>
    </div>
  );
};

export default StickyTopBar;
