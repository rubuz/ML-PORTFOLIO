import React from "react";

const MyInfo = () => {
  return (
    <div className="about__myinfo grid">
      <div className="about__box">
        <i class="bx bx-laptop about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Years Working in IT</span>
      </div>
      <div className="about__box">
        <i class="bx bx-user-pin about__icon"></i>
        <h3 className="about__title">Keen Eye</h3>
        <span className="about__subtitle">For smooth UI/UX</span>
      </div>
      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Striving</h3>
        <span className="about__subtitle">To learn and expand my skills</span>
      </div>
    </div>
  );
};

export default MyInfo;
