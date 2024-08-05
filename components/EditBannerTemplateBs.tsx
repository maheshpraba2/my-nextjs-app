//EditBannerTemplateBs
import React, { useState } from 'react';

interface EditBannerProps {
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onSave: (updatedBanner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave }) => {
  const [updatedBanner, setUpdatedBanner] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedBanner({
      ...updatedBanner,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(updatedBanner);
  };

  return (
    <div className="bottom-sheet">
      <h2>Edit Banner</h2>
      <form onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={updatedBanner.title}
            onChange={handleChange}
            placeholder="Enter banner title"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={updatedBanner.description}
            onChange={handleChange}
            placeholder="Enter banner description"
          />
        </label>
        <label>
          CTA Text:
          <input
            type="text"
            name="cta"
            value={updatedBanner.cta}
            onChange={handleChange}
            placeholder="Enter call-to-action text"
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={updatedBanner.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </label>
        <label>
          Background URL:
          <input
            type="text"
            name="background"
            value={updatedBanner.background}
            onChange={handleChange}
            placeholder="Enter background URL"
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditBannerTemplateBs;
