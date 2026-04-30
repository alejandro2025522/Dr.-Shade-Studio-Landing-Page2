/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Video, Zap, FileText, CheckCircle, Smartphone, Layout, Workflow } from 'lucide-react';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const getNextMondayNoon = () => {
      const now = new Date();
      const nextMonday = new Date(now);
      const daysUntilMonday = (1 + 7 - now.getDay()) % 7 || 7;
      nextMonday.setDate(now.getDate() + daysUntilMonday);
      nextMonday.setHours(12, 0, 0, 0);
      return nextMonday.getTime();
    };
    
    const targetDate = getNextMondayNoon();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 z-50 absolute top-0 border-b border-white/10">
        <div className="font-heading text-lg font-bold tracking-widest uppercase cursor-default">
          Therapy My Ass
        </div>
        <div className="text-xs font-mono tracking-widest uppercase text-gray-400">
          Early Access
        </div>
      </nav>

      <main className="pt-32 pb-24 flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center pb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 p-3 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-4 text-xs md:text-sm font-mono tracking-widest text-[#a8fbd3]"
          >
            <span className="uppercase opacity-80">Public launch in:</span>
            <span className="font-bold">
              [ {timeLeft.days.toString().padStart(2, '0')} DAYS : {timeLeft.hours.toString().padStart(2, '0')} HOURS : {timeLeft.minutes.toString().padStart(2, '0')} MINUTES : {timeLeft.seconds.toString().padStart(2, '0')} SECONDS ]
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8"
          >
            Turn ideas into <br className="hidden md:block"/> viral videos in minutes.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed mb-12"
          >
            Dr. Shade Studio generates hooks, scripts, scenes, captions, and visual prompts so you can create content faster without starting from zero.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a href="#shade" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors cursor-pointer text-center" data-hover="true" data-cursor-text="Launch">
              Try Dr. Shade Studio
            </a>
            <a href="#echostory" className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors cursor-pointer text-center" data-hover="true" data-cursor-text="Launch">
              Explore EchoStory
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm text-gray-500 max-w-xl mx-auto border-t border-white/10 pt-8"
          >
            Built for TikTok, Instagram Reels, YouTube Shorts, and creators who are tired of blank-page hell.
          </motion.p>

        </section>

        {/* PRODUCT SPLIT SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Two creative engines. <br className="md:hidden"/> One content system.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl flex flex-col h-full" id="shade">
              <h3 className="text-2xl font-bold mb-2">DR. SHADE STUDIO</h3>
              <p className="text-gray-400 mb-8 border-b border-white/10 pb-6">For viral short-form content.</p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {[
                  'Generates viral hooks',
                  'Writes voiceover scripts',
                  'Builds scene plans',
                  'Creates visual prompts',
                  'Produces batch variations'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4fb7b3] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors cursor-pointer" data-hover="true" data-cursor-text="Open">
                Open Dr. Shade Studio
              </button>
            </div>

            <div className="p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl flex flex-col h-full" id="echostory">
              <h3 className="text-2xl font-bold mb-2">ECHOSTORY</h3>
              <p className="text-gray-400 mb-8 border-b border-white/10 pb-6">For stories, chapters, and audiobook-style content.</p>
              
              <ul className="space-y-4 mb-12 flex-1">
                {[
                  'Turns ideas into story structure',
                  'Builds narrated chapters',
                  'Creates audio-ready scripts',
                  'Supports audiobook-style production',
                  'Helps turn books into content'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#637ab9] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors cursor-pointer" data-hover="true" data-cursor-text="Open">
                Open EchoStory
              </button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From idea to content pack.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Drop the idea.',
                desc: 'Example: “the favorite child”'
              },
              {
                num: '02',
                title: 'Generate the brain.',
                desc: 'Get the hook, voiceover, captions, and scene plan.'
              },
              {
                num: '03',
                title: 'Batch the variations.',
                desc: 'Create multiple versions so you can test what hits.'
              },
              {
                num: '04',
                title: 'Render or export.',
                desc: 'Use built-in video playback, fallback render, or export into CapCut, Runway, Veo, or your workflow.'
              }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="text-4xl font-mono font-black text-white/5 mb-6">{step.num}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                {i !== 3 && <div className="hidden md:block absolute top-[28px] -right-4 w-8 h-[1px] bg-white/10" />}
              </div>
            ))}
          </div>
        </section>

        {/* DEMO SECTION */}
        <section className="w-full py-24 bg-white/5 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Watch it work.</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left Side: Mock Video / Carousel */}
              <div className="aspect-[9/16] max-h-[600px] bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center z-20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all cursor-pointer" data-hover="true" data-cursor-text="Play">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div className="absolute bottom-6 left-6 z-20 space-y-2">
                  <p className="text-xs font-mono tracking-widest uppercase text-white/50">Terminal Preview</p>
                  <p className="text-lg font-bold">The Favorite Child.mp4</p>
                </div>
              </div>

              {/* Right Side: Output Example */}
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6 bg-black p-8 border border-white/10 rounded-xl">
                  <div className="flex items-start gap-4">
                    <span className="text-[#a8fbd3] font-mono text-xs uppercase tracking-widest mt-1">Hook:</span>
                    <p className="text-xl font-bold italic">“The favorite child isn’t loved more. They’re just easier to own.”</p>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div className="flex items-start gap-4">
                    <span className="text-[#a8fbd3] font-mono text-xs uppercase tracking-widest mt-1">Voice:</span>
                    <p className="text-gray-300 leading-relaxed text-sm">Stop pretending the favorite child won a prize. You were recruited.</p>
                  </div>
                  <div className="h-px bg-white/10 w-full" />
                  <div className="flex items-start gap-4">
                    <span className="text-[#a8fbd3] font-mono text-xs uppercase tracking-widest mt-1">Scene:</span>
                    <p className="text-gray-300 leading-relaxed text-sm font-light">Golden wires. Empty table. Porcelain smile cracking.</p>
                  </div>
                </div>

                <button className="self-start px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors cursor-pointer" data-hover="true" data-cursor-text="Try It">
                  Try this workflow
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DR. SHADE STUDIO FEATURE SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 border-b border-white/10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for creators who need content now.</h2>
            <p className="text-gray-400 text-lg">Dr. Shade Studio architecture.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Viral Engine', desc: 'Turns one idea into hooks, scripts, captions, and cinematic prompts.' },
              { icon: Layout, title: 'AutoBatch', desc: 'Creates multiple content variations from one idea.' },
              { icon: FileText, title: 'Visual Terminal', desc: 'Displays prompts, storyboard, video preview, and fallback render.' },
              { icon: Workflow, title: 'Synaptic Vault', desc: 'Stores agents, tone, personality, and creative direction.' },
              { icon: Mic, title: 'Neural Clone', desc: 'Voice workflow for narration, samples, and character consistency.' },
            ].map((feat, i) => (
              <div key={i} className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-xl">
                <feat.icon className="w-8 h-8 text-white mb-6 opacity-80" />
                <h4 className="text-lg font-bold mb-3">{feat.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ECHOSTORY FEATURE SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 border-b border-white/10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">EchoStory turns ideas into narrated stories.</h2>
            <p className="text-gray-400 text-lg">Long-form publishing architecture.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Story Builder', desc: 'Transforms rough ideas into structured chapters.' },
              { title: 'Narration Engine', desc: 'Creates audio-ready narration scripts.' },
              { title: 'Chapter Generator', desc: 'Breaks stories into clean chapter flow.' },
              { title: 'Creator Workflow', desc: 'Designed for authors, storytellers, and audiobook-style content.' },
              { title: 'Publishing Support', desc: 'Built for web, app store launch, and Google Play presence.' },
            ].map((feat, i) => (
              <div key={i} className="p-8 border border-white/10 bg-[#080808] hover:bg-white/[0.03] transition-colors rounded-xl border-t border-t-[#637ab9]/30">
                <h4 className="text-lg font-bold mb-3 text-white">{feat.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT’S FOR SECTION */}
        <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-24 border-b border-white/10">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">Made for creators who don’t have time to stare at a blank screen.</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-sm tracking-widest uppercase">
            {[
              'Content creators', 'Authors', 'Coaches', 'Storytellers', 
              'TikTok creators', 'Small brands', 'AI video makers', 'People with ideas and zero patience'
            ].map((audience, i) => (
              <div key={i} className="p-4 border-l border-white/20 text-gray-300">
                {audience}
              </div>
            ))}
          </div>
        </section>

        {/* PRICING / ACCESS SECTION */}
        <section className="w-full py-24 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Start creating before the public launch.</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 border border-white/10 bg-black flex flex-col h-full rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Early Access</h3>
                <p className="text-gray-400 mb-8 flex-1">Best for testing the tools before launch.</p>
                <button className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors cursor-pointer" data-hover="true" data-cursor-text="Select">
                  Get Early Access
                </button>
              </div>
              
              <div className="p-10 border border-white/40 bg-black flex flex-col h-full rounded-xl relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">Popular</div>
                <h3 className="text-2xl font-bold mb-4">Creator Mode</h3>
                <p className="text-gray-400 mb-8 flex-1">For creators making daily content.</p>
                <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-gray-200 transition-colors cursor-pointer" data-hover="true" data-cursor-text="Join">
                  Join Creator Mode
                </button>
              </div>

              <div className="p-10 border border-white/10 bg-black flex flex-col h-full rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Studio Mode</h3>
                <p className="text-gray-400 mb-8 flex-1">For people building full campaigns, books, videos, and story systems.</p>
                <button className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-colors cursor-pointer" data-hover="true" data-cursor-text="Contact">
                  Contact / Request Access
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-32 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">Your idea is not the problem.<br/> Your workflow is.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Dr. Shade Studio and EchoStory help turn raw ideas into content people can actually watch, hear, and share.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors cursor-pointer" data-hover="true" data-cursor-text="Launch">
              Try Dr. Shade Studio
            </button>
            <button className="px-8 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors cursor-pointer" data-hover="true" data-cursor-text="Explore">
              Explore EchoStory
            </button>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full py-12 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-black z-40 relative">
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          Therapy My Ass / Dr. Shade Studio / EchoStory
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-bold uppercase tracking-wider text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">Dr. Shade Studio</a>
          <a href="#" className="hover:text-white transition-colors">EchoStory</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;