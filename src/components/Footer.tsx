import React from 'react';
import { CuteMilkBottle } from './Illustrations';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t-2 border-peachy/10 py-12 mt-16 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cream via-peachy/30 to-cream" />
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="w-12 h-12 mx-auto mb-6 opacity-80 grayscale mix-blend-multiply flex justify-center">
          <CuteMilkBottle />
        </div>
        
        <h3 className="text-heading text-xl font-bold text-warm-brown mb-4">นมแม่อุ่นใจ</h3>
        
        <p className="text-warm-brown/60 text-sm mb-2 max-w-lg mx-auto leading-relaxed">
          เว็บไซต์นี้เป็นแหล่งข้อมูลให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล
        </p>
        <p className="text-warm-brown/60 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
          หากคุณแม่มีปัญหาเฉพาะตัว ควรปรึกษาแพทย์ พยาบาล หรือคลินิกนมแม่
        </p>
        <div className="text-peachy flex justify-center gap-1.5 items-center font-bold bg-peachy/5 inline-flex px-4 py-2 rounded-full">
          ทำด้วยความรัก
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          แด่คุณแม่ทุกคน
        </div>
      </div>
    </footer>
  );
}
