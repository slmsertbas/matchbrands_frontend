import React from "react";
import logo from "../Assets/logo.svg";

function Footer() {
  return (
    <div className="mt-5" style={{ backgroundColor: "#303030" }}>
      <div className="container">
        <div className="pt-5 text-white row">
          <div className="col d-flex flex-column justify-content-start align-items-start m-5">
            <div className="d-flex gap-3">
              <img src={logo} alt="image" /> <span>|</span> <h4>MatchBrands</h4>
            </div>
            <p className="grey-texts mt-3">
              Get started now to try our product
            </p>
            <div className="footer-input">
              <input type="text" placeholder="Enter your email here" />
            </div>
          </div>

          <div className="col d-flex justify-content-center align-items-center gap-5 p-3">
            <div className="text-start footer-topics">
              <h5 className="mb-4">Company</h5>
              <p className="grey-texts">About Us</p>
              <p className="grey-texts">Our Services</p>
              <p className="grey-texts">Blogs & Articles</p>
              <p className="grey-texts">Pricing plans</p>
            </div>
            <div className="text-start footer-topics">
              <h5 className="mb-4">Support</h5>
              <p className="grey-texts">FAQs</p>
              <p className="grey-texts">Contact Us</p>
              <p className="grey-texts">Account Info</p>
              <p className="grey-texts">MatchBrands Policy</p>
            </div>
          </div>
        </div>

        <hr className="text-white" />

        <div className="text-white d-flex justify-content-between pt-3 footer-topics">
          <p className="grey-texts">
            @ 2024 MatchBrands. Copyright and rights reserved
          </p>
          <p className="grey-texts">
            {" "}
            Terms and Conditions <span>.</span> Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
