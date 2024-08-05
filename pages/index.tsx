// pages/index.tsx
import React, { useState, useEffect } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';

const Home: React.FC = () => {
  const [banners, setBanners] = useState<any[]>([]);
  const [selectedBanner, setSelectedBanner] = useState<any | null>(null);

  useEffect(() => {
    fetch('/banners.json')
      .then(response => response.json())
      .then(data => setBanners(data));
  }, []);

  const handleEdit = (index: number) => {
    setSelectedBanner({ ...banners[index], index });
  };

  const handleSave = (updatedBanner: any) => {
    const newBanners = banners.map((banner, index) =>
      index === selectedBanner?.index ? updatedBanner : banner
    );
    setBanners(newBanners);
    setSelectedBanner(null);
  };

  return (
    <div className="homepage">
      <div className="banner-grid">
        {banners.map((banner, index) => (
          <BannerImageComp
            key={index}
            {...banner}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
      {selectedBanner && <EditBannerTemplateBs banner={selectedBanner} onSave={handleSave} />}
    </div>
  );
};

export default Home;
