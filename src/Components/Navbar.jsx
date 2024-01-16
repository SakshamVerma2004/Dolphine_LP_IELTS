import styles from "../Styles/Navbar.module.css";
import logo from "../Assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import hamburger from "../Assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
import HamburgerMenu from "./HamburgerMenu";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useState } from "react";
let Navbar = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.containerNavbar}>
          <a href="/" className={styles.logo}>
            <img src={logo} />
          </a>
          <div className={styles.optionsBlock}>
            <div>
              <ScrollLink to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="whychooseus" smooth={true} duration={700}>
                Why Choose Us
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="about" smooth={true} duration={700}>
                About Us
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="aboutIELTS" smooth={true} duration={700}>
                About IELTS
              </ScrollLink>
            </div>
            <div>
              <ScrollLink to="contact" smooth={true} duration={700}>
                Contact Us
              </ScrollLink>
            </div>
          </div>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            className={styles.registerBtn}
          >
            REGISTER
          </ScrollLink>

          <div
            className={styles.hamburgerMenuSection}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {!showMobileMenu ? <img src={hamburger} /> : <img src={close} />}
          </div>
        </div>
      </div>
      {showMobileMenu ? (
        <HamburgerMenu showMobileMenu={showMobileMenu} />
      ) : null}
    </>
  );
};

export default Navbar;
