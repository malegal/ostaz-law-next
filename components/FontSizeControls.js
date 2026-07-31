import { useState, useEffect } from 'react';
import Icon from './Icon';

export default function FontSizeControls() {
  const [size, setSize] = useState(100);
  useEffect(() => {
    const saved = localStorage.getItem('fontSize');
    if (saved) { const parsed = Number(saved); if (!isNaN(parsed) && parsed >= 80 && parsed <= 140) setSize(parsed); }
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', size + '%');
    localStorage.setItem('fontSize', String(size));
  }, [size]);
  const increase = () => setSize(Math.min(140, size + 10));
  const decrease = () => setSize(Math.max(80, size - 10));
  const reset = () => setSize(100);
  return (
    <div className="font-controls" dir="ltr">
      <button onClick={decrease} className="font-btn" aria-label="تصغير حجم النص" title="تصغير"><Icon name="search-minus" /></button>
      <span className="font-size-indicator">{size}%</span>
      <button onClick={increase} className="font-btn" aria-label="تكبير حجم النص" title="تكبير"><Icon name="search-plus" /></button>
      <button onClick={reset} className="font-btn reset" aria-label="إعادة ضبط حجم النص" title="إعادة الضبط"><Icon name="undo-alt" /></button>
      <style jsx>{/* تم حذف font-family المكررة، تعتمد على globals.css */}</style>
    </div>
  );
}
