import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { AboutHeroIcon } from './Illustrations';

export default function AboutView() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-peachy/10 text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cream rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-butter/30 rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-10 w-full">
            <div className="w-48 h-24">
              <AboutHeroIcon />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-heading text-warm-brown mb-6">เรื่องราวของเรา</h1>
          
          <p className="text-xl text-warm-brown/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            "นมแม่อุ่นใจ" เกิดขึ้นเพื่อเป็นเพื่อนคู่คิดและพื้นที่ปลอดภัยสำหรับคุณแม่ให้นมทุกคน 
            เราเข้าใจว่าเส้นทางนี้เต็มไปด้วยความรัก แต่ก็มีความกังวลและความเหนื่อยล้าซ่อนอยู่ 
            เราจึงรวบรวมความรู้ที่เข้าใจง่ายและกำลังใจ เพื่อให้ทุกช่วงเวลาที่คุณแม่ให้นม เป็นช่วงเวลาที่อบอุ่นและเปี่ยมไปด้วยความหมาย
          </p>

          <div className="bg-cream rounded-3xl p-6 sm:p-8 text-left border-2 border-peachy/20 shadow-sm relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-peachy">
                <AlertCircle size={28} />
              </div>
              <div>
                <h3 className="font-bold text-warm-brown text-lg mb-2 text-heading">โปรดทราบ</h3>
                <p className="text-warm-brown/70 leading-relaxed">
                  เว็บไซต์นี้เป็นแหล่งข้อมูลให้ความรู้ทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล 
                  หากคุณแม่มีปัญหาเฉพาะตัว เช่น เจ็บป่วยรุนแรง น้ำนมไม่ไหลเต้าคัดอักเสบ หรือลูกน้ำหนักไม่ขึ้น 
                  ควรปรึกษาแพทย์ พยาบาล หรือคลินิกนมแม่เพื่อการวินิจฉัยดูแลที่ถูกต้อง
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
