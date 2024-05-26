import React from "react";
import star from "../Assets/Star 8.svg";
import speaker from "../Assets/gridicons_speaker.svg";
import collab from "../Assets/mingcute_combine-fill.svg";
import networking from "../Assets/clarity_group-solid.svg";

function Abouts() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-3 mt-5 d-flex flex-column justify-content-center align-items-start">
          <h3 className="text-start pt-2 fw-bold">
            MatchBrands is here to promote your & your brand all over the world.
          </h3>
          <p className="pt-3 text-start grey-texts">
            We believe in the power of social media influencers to drive
            meaningful connections between brands and their audiences
          </p>
          <div className="gap-5 d-flex pt-4">
            <div className="d-flex flex-column justify-content-start align-items-start gap-3">
              <ul
                className="d-flex gap-1 star-icons"
                style={{ listStyle: "none" }}
              >
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
              </ul>
              <p>4.9 / 5 rating</p>
              <p style={{ fontWeight: "bolder", color: "grey" }}>Google</p>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start gap-3">
              <ul className=" gap-1 star-icons" style={{ listStyle: "none" }}>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} />
                </li>
                <li>
                  <img src={star} className="grey-texts" />
                </li>
              </ul>
              <p>4.9 / 5 rating</p>
              <p style={{ fontWeight: "bolder", color: "grey" }}>TrustPilot</p>
            </div>
          </div>
        </div>
        <div className="about-right col d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-evenly gap-4 align-items-start">
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={networking}
                className="aboutRightIcons"
                alt="networking"
              />
              <div className="aboutRightContent text-start">
                <h6 className="aboutRightTitle">Networking</h6>
                <p className="grey-texts">
                  Access to a diverse network of influencers.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={collab} className="aboutRightIcons" alt="networking" />
              <div className="aboutRightContent text-start">
                <h6 className="aboutRightTitle">Collaboration</h6>
                <p className="grey-texts">Streamlined collaboration process.</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={speaker} className="aboutRightIcons" alt="networking" />
              <div className="aboutRightContent text-start">
                <h6 className="aboutRightTitle ">Promotions</h6>
                <p className="grey-texts">
                  Data-driven insights for campaign success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
