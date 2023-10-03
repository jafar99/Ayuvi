import React from 'react';
import '../style/Benifit.css';
import bgbenfit from '../assets/bg5.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const Benefit = () => {
  const contentItems = [
    {
      image: img1,
      title: 'A Highly Personalised Health',
      content: 'Health Management Approach',
    },
    {
      image: img2,
      title: 'A Focus On Lifelong',
      content: 'Healthy Habit Formation',
    },
    {
      image: img3,
      title: 'Daily Progress Tracking Towards',
      content: 'Health Goals',
    },
    {
      image: img4,
      title: 'An Active Community Experience To',
      content: 'Stay Inspired',
    },
    {
      image: img5,
      title: 'Awareness Of Your Health',
      content: 'Ayurveda & Technology',
    },
    {
      image: img6,
      title: 'A Prevention-Oriented',
      content: 'Natural Way Of Living',
    },
  ];

  return (
    <div className="benefit" id='benefitt'> {/* Correct the class name */}
      <div className="circle-container">
        <div className="circle-image">
          <img src={bgbenfit} alt="Center Image" />
        </div>
        {contentItems.map((content, index) => (
          <div className="circle" key={index}>
            <div className="circle-image">
              <img src={content.image} alt="Center Image" />
            </div>
            <div className="circle-content">
              <h3>{content.title}</h3>
              <p>{content.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
