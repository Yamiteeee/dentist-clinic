'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

// Page animation components
import ScrollSection from "@/components/pageAnimations/ScrollSection";
import TypewriterText from "@/components/pageAnimations/TypewriterText";

import { Smile, Sparkles, Shield, Stethoscope } from "lucide-react";
import {
  servicesSectionHeader,
  servicesData,
  reviewsSectionHeader,
  testimonialsData,
} from "@/data";

import styles from "./page.module.css";

// Helper component to render dynamic icons matching landingData
function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "Stethoscope":
      return <Stethoscope size={28} />;
    case "Sparkles":
      return <Sparkles size={28} />;
    case "Smile":
      return <Smile size={28} />;
    case "Shield":
      return <Shield size={28} />;
    default:
      return <Stethoscope size={28} />;
  }
}

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const handleToggleService = (id: string) => {
    const isOpening = expandedId !== id;
    setExpandedId((prevId) => (prevId === id ? null : id));

    // Scroll to detail drawer when opened on mobile
    if (isOpening) {
      setTimeout(() => {
        drawerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  };

  // Find currently active service details to display below the grid
  const activeService = servicesData.find((service) => service.id === expandedId);

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <ScrollSection>
          <Hero />
        </ScrollSection>

        {/* About Us Section */}
        <ScrollSection>
          <About />
        </ScrollSection>

        {/* Services Section */}
        <ScrollSection id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.subheading}>
                {servicesSectionHeader.subheading}
              </span>

              {/* Typewriter animated heading */}
              <TypewriterText
                text={servicesSectionHeader.heading}
                className={styles.heading}
              />

              <p className={styles.description}>
                {servicesSectionHeader.description}
              </p>
            </div>

            {/* Top Row: All Service Cards */}
            <div className={styles.servicesGrid}>
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={<ServiceIcon name={service.iconName} />}
                  title={service.title}
                  description={service.description}
                  isExpanded={expandedId === service.id}
                  onToggle={() => handleToggleService(service.id)}
                />
              ))}
            </div>

            {/* Framer Motion Drawer: Below the Grid */}
            <AnimatePresence mode="wait">
              {activeService?.details && (
                <motion.div
                  ref={drawerRef}
                  key={activeService.id}
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={styles.expandedContent}>
                    {/* Image with Next.js fill */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={activeService.details.imageSrc}
                        alt={activeService.details.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.detailImage}
                      />
                    </div>

                    {/* Right Column: Text & Highlights */}
                    <div className={styles.detailText}>
                      <h4 className={styles.detailTitle}>
                        Overview — {activeService.title}
                      </h4>
                      <p className={styles.extendedDescription}>
                        {activeService.details.extendedDescription}
                      </p>

                      {activeService.details.highlights &&
                        activeService.details.highlights.length > 0 && (
                          <ul className={styles.highlightList}>
                            {activeService.details.highlights.map(
                              (item, idx) => (
                                <li key={idx} className={styles.highlightItem}>
                                  <span className={styles.checkDot}>✓</span>{" "}
                                  <span>{item}</span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollSection>

        {/* Testimonials Section */}
        <ScrollSection id="reviews" className={`${styles.section} ${styles.bgAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.subheading}>
                {reviewsSectionHeader.subheading}
              </span>

              {/* Typewriter animated heading */}
              <TypewriterText
                text={reviewsSectionHeader.heading}
                className={styles.heading}
              />

              <p className={styles.description}>
                {reviewsSectionHeader.description}
              </p>
            </div>

            <div className={styles.reviewsGrid}>
              {testimonialsData.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  treatment={testimonial.treatment}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  avatarUrl={testimonial.avatarUrl}
                />
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Appointment Booking Section */}
        <ScrollSection id="book" className={styles.section}>
          <div className={styles.container}>
            <AppointmentForm />
          </div>
        </ScrollSection>
      </main>

      <Footer />
    </div>
  );
}