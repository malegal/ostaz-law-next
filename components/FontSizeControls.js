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
      <style jsx>{`
        .font-controls { display: flex; align-items: center; gap: 0.3rem; background: rgba(255,255,255,0.05); padding: 0.2rem 0.4rem; border-radius: 30px; border: 1px solid rgba(255,255,255,0.08); }
        .font-btn { width: 30px; height: 30px; border-radius: 50%; border: none; background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.7); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; transition: all 0.3s ease; }
        .font-btn:hover { background: var(--matte-gold, #B08D57); color: #000; transform: scale(1.05); }
        .font-btn.reset { font-size: 0.65rem; }
        .font-size-indicator { font-size: 0.6rem; color: rgba(255,255,255,0.4); min-width: 32px; text-align: center; font-weight: 500; font-family: monospace; }
        @media (max-width: 640px) { .font-btn { width: 26px; height: 26px; font-size: 0.7rem; } .font-size-indicator { font-size: 0.5rem; min-width: 28px; } }
      `}</style>
    </div>
  );
}
