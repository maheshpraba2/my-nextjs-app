//BannerImageComp
import React from 'react';

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="ad-banner">
      <div className="banner-content">
        <img src={image} alt={title} className="banner-image"/>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="cta-button">{cta}</button>
        <button onClick={onEdit} className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default BannerImageComp;
