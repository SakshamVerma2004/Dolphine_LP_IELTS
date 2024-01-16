import styles from "../Styles/HamburgerMenu.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { Link as ScrollLink } from "react-scroll";
let HamburgerMenu = ({ showMobileMenu }) => {
  return (
    <div
      className={`${styles.hamburger} ${
        showMobileMenu ? styles.showHamburger : null
      }`}
    >
      <div
        className={`${styles.containerHamburger} ${
          showMobileMenu ? styles.showLinks : null
        }`}
      >
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="whychooseus" smooth={true} duration={500}>
          Why Choose Us
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          About Us
        </ScrollLink>
        <ScrollLink to="aboutIELTS" smooth={true} duration={500}>
          About IELTS
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact Us
        </ScrollLink>
      </div>
    </div>
  );
};

export default HamburgerMenu;
