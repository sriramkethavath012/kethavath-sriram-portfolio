import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Building, Edit3, X, CheckCircle } from 'lucide-react';
import { certificatesData, CertificateItem } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="py-20 lg:py-28 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
              <span className="w-6 h-[1px] bg-cyan-400/60" />
              <span>Continuous Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Certifications & Learning
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Course completions, technical workshops, and verified specializations. Configured as editable slots ready for verified certificates.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Ready for your verified credentials</span>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-gradient-to-b from-[#0a0f1d] to-[#070b13] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="h-28 w-full rounded-xl bg-gradient-to-tr from-cyan-950/40 to-slate-900 border border-cyan-500/20 p-4 flex flex-col justify-between mb-5 group-hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300/80 uppercase">
                      {cert.category}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                  <Building className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Certificate Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                {cert.isPlaceholder && (
                  <span className="text-[10px] font-mono text-slate-500">
                    Slot Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-lg rounded-2xl bg-[#090e1b] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Award className="w-4 h-4" />
                <span>CERTIFICATE RECORD</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {selectedCert.title}
              </h3>

              <div className="text-sm text-slate-300 mb-1">
                Issued by <span className="font-semibold text-white">{selectedCert.issuer}</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-6">
                Issue Date: {selectedCert.date}
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.08] text-xs text-slate-300 space-y-2 mb-6">
                <p>{selectedCert.description}</p>
                <div className="pt-2 border-t border-white/[0.06] text-[11px] text-slate-400">
                  <span className="text-cyan-400 font-mono font-medium">To attach your credential:</span> Update the entry in <code className="text-cyan-300">src/data/portfolioData.ts</code> with your verified completion link and digital badge image.
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-xl"
                >
                  Close
                </button>
                {selectedCert.credentialUrl !== '#' && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl"
                  >
                    <span>Open Verification</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
