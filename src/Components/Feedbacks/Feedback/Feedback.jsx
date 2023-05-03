import React from 'react';
import "./Feedback.css";

const Feedback = ({ name, img, paragraph }) => {
  return (
    <li className='feedback'>
      <img className='feedback__quote-img' src={process.env.PUBLIC_URL + "./img/quote.png"} alt="Номо кешбек" />

      {/* Paragraph */}
      <p className='feedback__paragraph'>{paragraph}</p>

      {/* Line */}
      <div className="feedback__line"></div>

      {/* Avatar */}
      <div className="feedback__avatar">
        <img src={process.env.PUBLIC_URL + img} alt="Номо кешбек" />
      </div>

      {/* Name */}
      <h3 className='feedback__name'>{name}</h3>
    </li>
  );
}

export default Feedback;