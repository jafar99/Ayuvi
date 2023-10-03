import React from "react";
import "../style/Report.css";
import img1 from "../assets/8.png";
import img2 from "../assets/9.png";
import img3 from "../assets/10.png";
import img4 from "../assets/11.png";

const Report = () => {
  const data = [
    {
      id: 1,
      name: "Report 1",
      image: img1,
      description:
        "Prakruti is your body's overall well-being & is determined by the tridosha that make up your Ayurvedic constitution.",
    },
    {
      id: 2,
      name: "Report 2",
      image: img2,
      description:
        "A state of complete wellness is achieved when the tridosha – Vata , Pitta and Kapha are in equilibrium.",
    },
    {
      id: 3,
      name: "Report 3",
      image: img3,
      description:
        "Day-to-day imbalances in these tridosha , results in a state of Vikruti – diseases or disorders.",
    },
    {
      id: 4,
      name: "Report 4",
      image: img4,
      description:
        "Determining your Prakruti and Vikruti will help you adopt a lifestyle that nurtures your dosha balance and prevents/corrects health issues at their root.",
    },
  ];

  return (
    <>
      <div className="Report" id="benefit">
        <div className="Report__title">
          <span className="headingreport">
            Get A Personalized Wellness Report
          </span>
        </div>
        <div className="Report__content">
          {data.map((item) => (
            <div className="Report__content__item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p className="content">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="score">
        <span className="para">
          Take our 10-minute questionnaire to get a detailed analysis of your
          mind, body and soulconstitution including your Ayurvedic Profile and
          Ayuvi Score
        </span>
        <button className="Report__button">
          {" "}
          <span>Get Your Report </span>
        </button>
      </div>
    </>
  );
};

export default Report;
