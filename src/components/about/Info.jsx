import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months Web Developer</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">GPA</h3>
        <span className="about__subtitle">3.49 / 4.00</span>
      </div>
      
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">English</h3>
        <span className="about__subtitle">Intermediate</span>
      </div>

    </div>
  );
};

export default Info;
