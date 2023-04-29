import React from 'react';
import Feedback from './Feedback/Feedback';
import "./Feedbacks.css";

const feedbacks = [
  {
    "name": "Олена",
    "img": "./img/Olena.png",
    "paragraph": "Nomo - це моя любов! Купила дешевше одяг та й ще й накопичила собі на подарунок"
  },

  {
    "name": "Григорій",
    "img": "./img/Grygoriy.png",
    "paragraph": "Завжди купую через цей додаток. Так зручно та завжди приємно отримувати кешбек."
  },

  {
    "name": "Ольга",
    "img": "./img/Olga.png",
    "paragraph": "Люблю економію. Тому обираю зручне рішення - купувати з кешбек програмою."
  }
]

const Feedbacks = () => {
  return (
    <section className='feedbacks' id='feedbacks'>
      <div className='feedbacks__header'>
        <div className="feedbacks__header__img"></div>
        <h2 className='feedbacks__header__title'>Відгуки про нас</h2>
      </div>
      <ul className="feedback__list">
        {feedbacks.map((feedback, index) => {
          return <Feedback 
                    key={index}
                    name={feedback.name}
                    img={feedback.img}
                    paragraph={feedback.paragraph}
                  />
        }
        )}
      </ul>
    </section>
  );
}

export default Feedbacks;
