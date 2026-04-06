import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, CheckCircle, Scale, Terminal } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout activeSection="terms">
      <div className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 liquid-glass rounded-full border border-white/10 mb-6">
              <Gavel size={12} className="text-[#78C3AA]" />
              <span className="text-[10px] text-white/50 tracking-[0.2em] font-mono uppercase">Institutional Framework</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-medium tracking-tight text-white mb-6">
              Terms of <em className="font-serif italic text-white/80">Service</em>
            </h1>
            <p className="text-white/40 text-lg font-display max-w-2xl mx-auto leading-relaxed">
              Foundational governance for the deployment and utilization of SynteraTek orchestration node services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                icon: CheckCircle,
                title: "1. Service Utilization",
                content: "Access to SynteraTek services is granted for organizational optimization and legitimate business automation. Prohibited activities include reverse engineering of orchestration nodes, unauthorized penetration testing, and utilizing the platform for malicious data exfiltration."
              },
              {
                icon: Scale,
                title: "2. Liability & Orchestration",
                content: "SynteraTek provides the integration layer 'as-is,' focusing on high-fidelity synchronization. We are not liable for data inconsistencies resulting from external API outages or improperly configured transformation logic at the source node."
              },
              {
                icon: Terminal,
                title: "3. API Usage Limits",
                content: "Tier-based rate limits apply to all integration endpoints. Exceeding assigned throughput may result in temporary throttling to protect global mesh integrity. Enterprise accounts have dedicated, scalable bandwidth parameters."
              },
              {
                icon: Gavel,
                title: "4. Termination & Recovery",
                content: "SynteraTek reserves the right to suspend accounts engaged in infrastructure degradation. Continuous state mapping allows for a 30-day graceful recovery period if service is terminated due to administrative non-compliance."
              }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="liquid-glass rounded-3xl p-8 lg:p-10 border border-white/5"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#78C3AA] group-hover:bg-[#78C3AA] group-hover:text-black transition-all">
                    <section.icon size={18} />
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
            <p className="text-white/30 text-xs font-mono tracking-widest uppercase">
              SynteraTek Governance Framework // March 2026 Revision
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
