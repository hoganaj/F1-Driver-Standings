import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './CardRail.css';

const CardRail = ({ cards }) => {
  // only for touch devices
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => document.querySelector('.card-rail').scrollBy({ left: window.innerWidth, behavior: 'smooth' }),
    onSwipedRight: () => document.querySelector('.card-rail').scrollBy({ left: -window.innerWidth, behavior: 'smooth' }),
    preventScrollOnSwipe: true
  });
  return (
    <div className="card-rail-section" style={{ backgroundImage: 'url(/railBackground.png)' }}>
      <h1 className="section-title">Oracle In Practice</h1>
      <div className="card-rail" {...swipeHandlers}>
        {cards.map((card, index) => (
          <a href={card.link} target="_blank" key={index} className="card" rel="noreferrer">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-title">{card.title}</div>
            <div className="card-tag">{card.tag}</div>
            <div className="card-time">{card.time}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardRail;
