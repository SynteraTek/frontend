import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout activeSection="privacy">
      <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 liquid-glass rounded-full border border-white/10 mb-6">
              <Shield size={12} className="text-[#78C3AA]" />
              <span className="text-[10px] text-white/50 tracking-[0.2em] font-mono uppercase">Data Integrity</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-white mb-6">
              Privacy <em className="font-serif italic text-white/80">Policy</em>
            </h1>
            <p className="text-white/40 text-lg font-display max-w-2xl mx-auto">
              How we protect your organizational intelligence and govern data orchestration.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: Lock,
                title: "1. Data Collection Protocols",
                content: "SynteraTek collects system metadata and integration signal data required for cross-platform orchestration. We do not store the underlying business data unless explicitly configured for persistence. All data collection is governed by zero-trust architecture parameters."
              },
              {
                icon: Eye,
                title: "2. Usage & Orchestration",
                content: "Collected data is utilized strictly for process optimization, predictive automation, and system sync. We employ segregated processing environments to ensure your organization's automation layer remains private and isolated from third-party observability."
              },
              {
                icon: Shield,
                title: "3. Security Hardening",
                content: "Our infrastructure is SOC2 Type II compliant and utilizes AES-256 encryption at rest. Real-time monitoring nodes actively detect and neutralize anomalous traffic patterns, ensuring your integration mesh is perpetually secure."
              },
              {
                icon: FileText,
                title: "4. Compliance & Global Access",
                content: "SynteraTek adheres to GDPR, CCPA, and specialized international data transfer protocols. We provide granular regional data residency options for organizations with strict sovereignty requirements."
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="liquid-glass-strong rounded-3xl p-8 lg:p-12 border border-white/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#78C3AA]/10 border border-[#78C3AA]/20">
                    <section.icon size={20} className="text-[#78C3AA]" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-medium text-white tracking-tight">{section.title}</h2>
                </div>
                <p className="text-white/50 text-sm lg:text-base leading-relaxed font-display">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
              Last updated: March 30, 2026 // v4.2.0 (Stable)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
