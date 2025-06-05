import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Career</h2>
      <span className="section__subtitle">My Career Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title qualification__title-present">
                  Telkom University Bandung
                </h3>
                <span className="qualification__subtitle">
                  Indonesia - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder qualification__rounder-present"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SMA Huffazh Darul Munir</h3>
                <span className="qualification__subtitle">
                  Indonesia - High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  SMP Huffazh Darul Munir
                </h3>
                <span className="qualification__subtitle">
                  Indonesia - Middle School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

            

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title qualification__title-present">
                  Build a Strong Career Foundation
                </h3>
                <span className="qualification__subtitle">
                  My Digital Academy by Mandiri - Member
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> March 2025
                </div>
              </div>

              <div>
                <span className="qualification__rounder qualification__rounder-present"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  elevAIte with Dicoding Microsoft AI 900
                </h3>
                <span className="qualification__subtitle">
                  Microsoft - Member
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jan 2025 - June 2025 
                </div>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title qualification__title-present">
                  IEEE SB Telkom University
                </h3>
                <span className="qualification__subtitle">
                  Telkom University - IT Staff
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Nov 2023 - Nov 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder qualification__rounder-present"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Mentor
                </h3>
                <span className="qualification__subtitle">
                  Telkom University - Badan Mentoring
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 March -
                  May
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Head Division of Syiar FIF
                </h3>
                <span className="qualification__subtitle">
                  Telkom University - Al-Fath
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
