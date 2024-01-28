import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer_bar footer_home container">
        <div className="footer_one flex">
          <div className="logo">
            <img src="./image/logo.png" alt="" />
          </div>

          <div className="footer_text">
            <h3>visit us</h3>
            <ul>
              <li>Office #401 Omgae Heightss</li>
              <li>E-11/3 lslamadab, Pakistan</li>
            </ul>
          </div>
          <div className="footer_text">
            <h3>working hours</h3>
            <ul>
              <li>Monday</li>
              <li>09:00 am - 09:00 pm</li>
              <li>Satuday - Sunday - Closed</li>
            </ul>
          </div>
          <div className="footer_text">
            <h3>about us</h3>
            <ul>
              <li>Our Work</li>
              <li>
                Our People <span>team</span>
              </li>
              <li>
                Joumal <span>research</span>
              </li>
              <li>
                CyberWord 365 <span>escoiety</span>
              </li>
              <li>
                CyberWord 365 <span>vacancies</span>
              </li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer_text">
            <h3>newsletter</h3>
            <p>
              Stay up to data with our latest new, receve exclusive deals, and
              more.
            </p>

            <form>
              <input type="text" placeholder="Enter Your Email Address" />
              <input type="submit" value="subscribe" className="sub_btn" />
            </form>
          </div>
        </div>

        <div className="footer_two">
          <div className="team flex">
            <ul className="flex">
              <li>Team</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
              <li>Event</li>
              <li>
                Careers <span>vacancies</span>
              </li>
            </ul>

            <p>+92333522108</p>
          </div>

          <div className="line"></div>

          <div className="team flex">
            <p>© 2023 All rights Reserved. Design by Team Perspective.PK</p>

            <div className="icon_footer flex">
              <FaFacebookF className="icon"/>
              <FaYoutube className="icon"/>
              <FaGooglePlusG className="icon"/>
              <FaTwitter className="icon"/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
