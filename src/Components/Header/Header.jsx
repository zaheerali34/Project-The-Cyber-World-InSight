import { NavLink } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";

function Header() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <header className="header_container container flex">
        <div className="logo">
          <img src="./image/logo.png" alt="" />
        </div>

        <nav ref={navRef}>
          <ul>
          <NavLink to={""}><li>Home</li></NavLink>

            <NavLink to={"about"}><li> About </li></NavLink>
            <li>
              Who We Are
              <AiFillCaretDown  className="down_bar"/>
              <div className="sub_menu">
                <ul>
                  <li>Our People</li>
                  <li>Our Mission And Vision</li>
                  <li>Mission</li>
                </ul>
              </div>
            </li>
            <li>
              What We Do
              <AiFillCaretDown  className="down_bar"/>
              <div className="sub_menu">
                <ul>
                  <li className="hover_work">
                    Our Work

                    <div className="sub_menu-2">
                      <ul>
                        <li>Al And Ethics</li>
                        <li>Arificial Intelligence in Politics</li>
                        <li>Cybersecurity And Thereat Analysis</li>
                        <li>Cybersecurity Awareness And Education</li>
                        <li>Data Governance</li>
                        <li>Digital Diplomacy</li>
                        <li>Digital Disinformation And Misinformation</li>
                        <li>Elaction Technology</li>
                        <li>Emerging Technologies</li>
                        <li>Expert Interviews</li>
                        <li>Global Cybersecurity initatives</li>
                        <li>Reguiation And Policy</li>
                        <li>Tech And Social Movements</li>
                      </ul>
                    </div>
                    <AiFillCaretRight className="down_bar"/>

                  </li>
                  <li>Journal</li>
                </ul>
              </div>
            </li>
            <NavLink to={"contribute"}><li>Contribute</li></NavLink>
            <NavLink to={"new"}>
            <li>
              News <span>latest cyber development</span>
            </li>
            </NavLink>
          </ul>
        </nav>


        <div className="last_bar flex">
        <button className="join_btn">Join Us</button>
        <a href="#" onClick={showNavbar} className="nav_btn nav_meun_btn">
        <AiOutlineMenu />
        </a>
        </div>
      </header>
    </>
  );
}

export default Header;
