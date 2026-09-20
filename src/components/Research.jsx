import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, FileText, X, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { publications } from '../data/publications';
import { TextShimmer } from './core/text-shimmer';
import Card3D from './Card3D';
import styles from './Research.module.css';

const Research = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };
    if (selectedCertificate) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertificate]);

  return (
    <section className={styles.researchSection} id="research">
      <div className="container">
        <div className={styles.header}>
          <h2>
            <TextShimmer duration={2}>Research & Publications</TextShimmer>
          </h2>
          <p>
            Peer-reviewed scientific contributions, published journal papers, and verified academic research credentials.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {publications.map((paper) => (
            <Card3D key={paper.id} className={styles.publicationCard}>
              <div className={styles.gridContent}>
                {/* Left Info Column */}
                <div className={styles.infoColumn}>
                  <div className={styles.badgesRow}>
                    <span className={styles.statusBadge}>
                      <Sparkles size={14} />
                      {paper.status}
                    </span>
                    <span className={styles.venueBadge}>
                      JETIR • {paper.year}
                    </span>
                    <span className={styles.venueBadge}>
                      7.95 Impact Factor
                    </span>
                  </div>

                  <h3 className={styles.paperTitle}>{paper.title}</h3>

                  <div className={styles.metaInfo}>
                    <div className={styles.authors}>
                      <strong>Author:</strong> {paper.authors}
                    </div>
                    {paper.issn && (
                      <div className={styles.doi}>
                        <span>{paper.issn}</span>
                      </div>
                    )}
                    {paper.doi && (
                      <div className={styles.doi}>
                        <span>Paper ID: {paper.doi} • {paper.volume}</span>
                      </div>
                    )}
                  </div>

                  <p className={styles.abstract}>{paper.abstract}</p>

                  <div className={styles.tags}>
                    {paper.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <a
                      href={paper.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryLinkBtn}
                    >
                      <FileText size={18} />
                      Read Paper
                      <ArrowUpRight size={18} />
                    </a>

                    <button
                      type="button"
                      className={styles.certificateTriggerBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCertificate(paper);
                      }}
                    >
                      <Award size={18} />
                      View Certificate
                    </button>
                  </div>
                </div>

                {/* Right Certificate Thumbnail Preview (Uncropped, Interactive) */}
                <div className={styles.previewColumn}>
                  <div
                    className={styles.certPreviewCard}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCertificate(paper);
                    }}
                    title="Click to view full uncropped certificate"
                  >
                    <img
                      src={paper.certificateImage}
                      alt={`${paper.title} Certificate`}
                      className={styles.certThumbnail}
                    />
                    <div className={styles.overlayHint}>
                      <span className={styles.hintBadge}>
                        <Eye size={14} />
                        Click to view Certificate Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox (Full Certificate, Zero Cropping) */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleGroup}>
                  <Award size={22} color="var(--accent-color)" />
                  <h3>Certificate of Publication</h3>
                  <span>ID: {selectedCertificate.id}</span>
                </div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.modalBody} data-lenis-prevent>
                <div className={styles.certImageWrapper}>
                  <img
                    src={selectedCertificate.certificateImage}
                    alt={`${selectedCertificate.title} Certificate`}
                    className={styles.fullCertImage}
                  />
                </div>
              </div>

              <div className={styles.modalFooter}>
                <div className={styles.footerActions}>
                  <a
                    href={selectedCertificate.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certOpenExternal}
                  >
                    <ExternalLink size={16} />
                    Open Image in Full Tab
                  </a>
                </div>

                <div className={styles.footerActions}>
                  <a
                    href={selectedCertificate.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLinkBtn}
                  >
                    <FileText size={18} />
                    Read Published Paper
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
