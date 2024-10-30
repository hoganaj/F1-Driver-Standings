import React, { useEffect, useState } from 'react';
import './ParallaxHero.css';

const ParallaxHero = ({ backgroundImage, foregroundImage, title, date, location }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-hero">
      <div
        className="parallax-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div
        className="parallax-foreground"
        style={{
          backgroundImage: `url(${foregroundImage})`,
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />
      <div className="parallax-content">
        <h1 className="parallax-title">{title}</h1>
        <div className="parallax-details">
          <span className="parallax-date">{date}</span>
          <span className="parallax-location">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
