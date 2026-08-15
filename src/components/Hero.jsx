import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import WhatsAppIcon from './WhatsAppIcon';
import { getImagePath } from '../utils/imageUtils';
import { 
  ArrowRight, 
  Download, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  Layers, 
  Zap, 
  Star 
} from 'lucide-react';

const useCountUp = (target, duration = 1600) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = null;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              setValue(Math.floor(progress * target));
              if (progress < 1) {
                rafId = requestAnimationFrame(tick);
              }
            };
            rafId = requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, duration]);

  return [value, ref];
};

const Hero = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();

  const [yearsValue, yearsRef] = useCountUp(2);
  const [projectsValue, projectsRef] = useCountUp(66);
  const [satisfactionValue, satisfactionRef] = useCountUp(100);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-6 backdrop-blur-md shadow-sm transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800/80 border-slate-700/80 text-slate-200' 
                : 'bg-white/80 border-slate-200 text-slate-700'
            }">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide">Available for Freelance & Custom Web Orders</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
              Hi, I'm <span className="gradient-text">Shafqat Ullah</span>
            </h1>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <span>Senior</span>
              <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 text-xl sm:text-2xl">
                Full Stack Developer
              </span>
              <span>& Software Engineer</span>
            </h2>

            <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              I craft high-performance, fast, modern web applications & scalable APIs with React, Node.js, Express, and MongoDB. Transforming ideas into revenue-generating web solutions for businesses around the globe.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              {/* Order / Hire Button */}
              <button
                onClick={() => onOpenOrderModal()}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-base shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Place Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Projects Button */}
              <a
                href="#projects"
                className={`px-6 py-3.5 rounded-full font-semibold text-base border transition-all duration-300 flex items-center gap-2 ${
                  isDark
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-primary/50'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-primary/50'
                }`}
              >
                <span>View Portfolio</span>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Shafqat-Ullah"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 ${
                    isDark ? 'bg-slate-800/90 text-slate-300 hover:bg-primary hover:text-white' : 'bg-slate-200/80 text-slate-700 hover:bg-primary hover:text-white'
                  }`}
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shafqat-ullah15305/"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 ${
                    isDark ? 'bg-slate-800/90 text-slate-300 hover:bg-blue-600 hover:text-white' : 'bg-slate-200/80 text-slate-700 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://wa.me/923255635495"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 ${
                    isDark ? 'bg-slate-800/90 text-slate-300 hover:bg-emerald-500 hover:text-white' : 'bg-slate-200/80 text-slate-700 hover:bg-emerald-500 hover:text-white'
                  }`}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:shafqatullah15305@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 ${
                    isDark ? 'bg-slate-800/90 text-slate-300 hover:bg-red-500 hover:text-white' : 'bg-slate-200/80 text-slate-700 hover:bg-red-500 hover:text-white'
                  }`}
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

          </div>

          {/* Right Image Container */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            
            {/* Background Glow Ring */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer Gradient Frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-1.5 animate-spin-slow opacity-90 blur-[1px]"></div>
              
              {/* Inner Avatar Image */}
              <div className="relative w-full h-full rounded-full p-2 overflow-hidden bg-night-bg/50 backdrop-blur-md">
                <img
                  src={getImagePath('Images/Shafqat_Ullah.png')}
                  alt="Shafqat Ullah - Senior Full Stack MERN Developer"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-full h-full object-cover rounded-full shadow-2xl floating transition-transform hover:scale-105 duration-500"
                />
              </div>

              {/* Floating Badge 1 - Satisfaction */}
              <div className={`absolute -bottom-4 left-0 sm:-left-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border shadow-xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-md animate-float ${
                isDark ? 'bg-slate-900/90 border-slate-700 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold">100% Rating</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">5.0 Star Feedback</div>
                </div>
              </div>

              {/* Floating Badge 2 - Experience */}
              <div className={`absolute top-4 right-0 sm:-right-6 px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl border shadow-xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-md ${
                isDark ? 'bg-slate-900/90 border-slate-700 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-extrabold">2+ Years Exp</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Full Stack Lead</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Quick Highlights Counter Bar */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-3xl border backdrop-blur-md ${
          isDark 
            ? 'bg-slate-900/60 border-slate-800/80 shadow-2xl' 
            : 'bg-white/80 border-slate-200 shadow-lg'
        }`}>
          <div className="text-center p-2 sm:p-3">
            <div ref={yearsRef} className="text-2xl sm:text-4xl font-extrabold gradient-text mb-1">{yearsValue}+</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Years Experience</div>
          </div>
          <div className="text-center p-2 sm:p-3 border-l border-slate-700/30">
            <div ref={projectsRef} className="text-2xl sm:text-4xl font-extrabold text-primary mb-1">{projectsValue}+</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Completed Projects</div>
          </div>
          <div className="text-center p-2 sm:p-3 border-l border-slate-700/30">
            <div ref={satisfactionRef} className="text-2xl sm:text-4xl font-extrabold text-secondary mb-1">{satisfactionValue}%</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Client Satisfaction</div>
          </div>
          <div className="text-center p-2 sm:p-3 border-l border-slate-700/30">
            <div className="text-2xl sm:text-4xl font-extrabold text-accent mb-1">24/7</div>
            <div className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Support & Delivery</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
