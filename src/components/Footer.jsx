import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="footeraddress">
            <h2>Office Address</h2>
            <p className="addresscontent">
              B-201, IBITF Office, IIT Bhilai GEC Campus, Sejbahar,
              <br />
              Raipur, Chhattisgarh 492015
              <br />
              <br />
              Contact :- +91 80049 16849
              <br />
              Email :- hello@saeternus.com
            </p>
          </div>
          <div className="footerlist">
            <h2 className="linkshead">Quick Links</h2>
            <ul className="footeritems">
              <Link to="/" className="links">
                Home
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/services" className="links">
                Services
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/contact-us" className="links">
                Contact Us
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/courses/gis" className="links">
                Courses
              </Link>
            </ul>
          </div>
        </div>
        <div className="footerbottom">
          <div className="footerbottomleft">
            <p>© 2023 All rights reserved</p>
          </div>
          <div className="footerbottomright">
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
