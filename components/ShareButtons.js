import { useState } from 'react';
import Icon from './Icon';

export default function ShareButtons({ url, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleShare = () => setIsOpen(!isOpen);
  const closeShare = () => setIsOpen(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  return (
    <div className="share-wrapper">
      <button className={`share-toggle-btn ${isOpen ? 'active' : ''}`} onClick={toggleShare} aria-label="مشاركة" title="مشاركة">
        <Icon name="share-alt" />
      </button>
      <div className={`share-popup ${isOpen ? 'open' : ''}`}>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-icon facebook" onClick={closeShare} title="فيسبوك"><Icon name="facebook-f" /></a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-icon twitter" onClick={closeShare} title="تويتر"><Icon name="twitter" /></a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-icon linkedin" onClick={closeShare} title="لينكد إن"><Icon name="linkedin-in" /></a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-icon whatsapp" onClick={closeShare} title="واتساب"><Icon name="whatsapp" /></a>
        <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="share-icon telegram" onClick={closeShare} title="تليجرام"><Icon name="telegram-plane" /></a>
      </div>
      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </div>
  );
}
