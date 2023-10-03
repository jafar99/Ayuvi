import React from "react";
import "../style/Experts.css";
import profile from "../assets/profile.png";

const Experts = () => {
  return (
    <div className="Expert">
      <div className="Expert-heading">Our Experts</div>

      <div className="Expert-content">
        <div className="content-left">
          <div className="content-left-top">
            <div className="content-left-top-img">
              <img src={profile} alt="profile" />
            </div>

            <div className="content-left-top-text">
              <span className="content-left-top-text-name">
                Dr. Jyoti A. Shirodkar
              </span>
              <span className="content-left-top-text-designation">
              Chairman, NABARD BAMS, MD, Ph.D25 Years of Experience
              </span>
              <span className="content-left-top-text-content">
                 Pune
              </span>
            </div>
          </div>
          <div className="content-left-bottom">
            <span className="content-left-bottom-text">
              Dr. Jyoti A. Shirodkar is a practising Ayurvedic physician since
              25 years, with her specialty in Diabetes. Her extensive areas of
              research include the development of Ayurvedic food supplements for
              diabetic and obese people and an Ayurveda-Based Artificial
              Intelligence Driven Test for Diabetes Risk Profiling. Her
              Ayurvedic approach in the management of diabetes and diet has
              appeared in multiple publications.
            </span>
          </div>
        </div>

        <div className="content-center">

        <div className="content-center-top">
            <div className="content-center-top-img">
              <img src={profile} alt="profile" />
            </div>

            <div className="content-center-top-text">
              <span className="content-center-top-text-name">
                Dr. Jyoti A. Shirodkar 
              </span>
              <span className="content-center-top-text-designation">
                Chairman, NABARD BAMS, MD, Ph.D25 Years of Experience
              </span>
              <span className="content-center-top-text-content">
                Pune
              </span>
            </div>
          </div>

          <div className="content-center-bottom">
            <span className="content-center-bottom-text">
              Dr. Jyoti A. Shirodkar is a practising Ayurvedic physician since
              25 years, with her specialty in Diabetes. Her extensive areas of
              research include the development of Ayurvedic food supplements for
              diabetic and obese people and an Ayurveda-Based Artificial
              Intelligence Driven Test for Diabetes Risk Profiling. Her
              Ayurvedic approach in the management of diabetes and diet has
              appeared in multiple publications.
            </span>
          </div>

        </div>

        <div className="content-right">
          <button className="btn3">
            {" "}
            <span className="btn3-text"> View More </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experts;
