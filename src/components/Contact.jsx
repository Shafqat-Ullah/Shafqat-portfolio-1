import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Mail, Phone, Copy, Check, MessageSquare, ShoppingBag, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Contact = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const openWhatsAppDirect = () => {
    const whatsappNumber = "923255635495";
    const messageText = encodeURIComponent("Hello Shafqat! I would like to inquire about starting a new web development project.");
    window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, '_blank');
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg/90 border-t border-slate-800/80' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/20 mb-4">
            <ShoppingBag className="w-4 h-4" /> Place Order & Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Get In Touch & <span className="gradient-text">Place Your Order</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Ready to build your web application? Launch our instant Order Wizard or connect directly on WhatsApp & Email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Cards Column */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl font-extrabold mb-4">Direct Contact Details</h3>
            
            {/* Location Card */}
            <div className={`p-6 rounded-2xl border flex items-start gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Location</h4>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Shaikh Zayed Islamic Centre, University of Peshawar (UOP), KPK, Pakistan
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className={`p-6 rounded-2xl border flex items-start justify-between gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-4 truncate">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <h4 className="font-bold text-base mb-1">Email</h4>
                  <p className={`text-sm truncate ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    shafqatullah15305@gmail.com
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy('shafqatullah15305@gmail.com', 'email')}
                className={`p-2.5 rounded-lg border text-xs font-bold shrink-0 transition ${
                  copiedType === 'email' ? 'bg-emerald-500 text-white' : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
                title="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className={`p-6 rounded-2xl border flex items-start justify-between gap-4 transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1">Phone / WhatsApp</h4>
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    +92 325 5635495
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy('+923255635495', 'phone')}
                className={`p-2.5 rounded-lg border text-xs font-bold shrink-0 transition ${
                  copiedType === 'phone' ? 'bg-emerald-500 text-white' : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
                title="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Place Project Order Card Column */}
          <div className="lg:col-span-6">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden transition-all ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              {/* Top Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/30 to-transparent rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">Place Project Order</h3>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5" /> Instant Booking & Fast Turnaround
                  </span>
                </div>
              </div>

              <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Launch our interactive Order Wizard to select your service package, set budget tiers, specify target deadlines, and submit directly!
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 mb-8">
                {[
                  'Express 3-Day Turnaround Available',
                  '100% Satisfaction & Money-Back Guarantee',
                  'Free Post-Launch Support & Bug Warranty',
                  'Full Source Code & Admin Panel Delivered'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenOrderModal()}
                  className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent text-white font-extrabold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Place Order Now</span>
                  <Sparkles className="w-4 h-4 opacity-80" />
                </button>

                <button
                  onClick={openWhatsAppDirect}
                  className="py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
