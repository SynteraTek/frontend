import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, MousePointer } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const Cookies = () => {
  return (
    <Layout activeSection="cookies">
      <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 liquid-glass rounded-full border border-white/10 mb-6">
              <Cookie size={12} className="text-[#78C3AA]" />
              <span className="text-[10px] text-white/50 tracking-[0.2em] font-mono uppercase">User State Persistence</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-medium tracking-tight text-white mb-6">
              Cookie <em className="font-serif italic text-white/80">Policy</em>
            </h1>
            <p className="text-white/40 text-lg lg:text-xl font-display max-w-2xl mx-auto leading-relaxed">
              Managing session persistence and orchestration telemetry within the SynteraTek ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {[
              {
                icon: Info,
                title: "Essential Nodes",
                content: "Crucial for core dashboard performance, session authentication, and maintaining high-fidelity orchestration metrics. These cannot be disabled for continuous platform stability."
              },
              {
                icon: MousePointer,
                title: "UI Personalization",
                content: "Remembers user-specific interface preferences and high-fidelity customization choices within the Command Center, optimizing repetitive workflow visualization."
              },
              {
                icon: Settings,
                title: "Telemetry Sync",
                content: "Facilitates anonymous performance tracking across organizational nodes to improve global throughput and optimize predictive automation logic patterns."
              },
              {
                icon: Cookie,
                title: "External Integration",
                content: "Coordinates with connected third-party systems like Salesforce and SAP to manage cross-domain session handshakes and seamless API authentication persistence."
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="liquid-glass-strong rounded-3xl p-8 border border-white/5 flex flex-col items-start text-left"
              >
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                   <section.icon size={20} className="text-[#78C3AA]" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{section.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-display">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-10 liquid-glass rounded-[2rem] border border-white/10 text-center"
          >
             <h4 className="text-white text-lg font-medium mb-4">Granular Management</h4>
             <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto leading-relaxed">You may adjust your telemetry and persistence preferences at any time within your Organization Settings node. Note that disabling certain nodes may impact real-time visualization latency.</p>
             <div className="flex justify-center gap-4">
                <button className="px-6 py-2.5 rounded-full bg-[#78C3AA] text-black text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform">Accept All Nodes</button>
                <button className="px-6 py-2.5 rounded-full bg-white/5 text-white/50 text-xs font-semibold uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-all">Configure</button>
             </div>
          </motion.div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase">
              SynteraTek Persistence Protocol // March 30, 2026
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
