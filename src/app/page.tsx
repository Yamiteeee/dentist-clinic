'use client';

import { useState } from "react";
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

  const handleToggleService = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

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

              <TypewriterText
                text={servicesSectionHeader.heading}
                className={styles.heading}
              />

              <p className={styles.description}>
                {servicesSectionHeader.description}
              </p>
            </div>

            {/* Service Cards with Integrated Inline Expansion */}
            <div className={styles.servicesGrid}>
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  icon={<ServiceIcon name={service.iconName} />}
                  title={service.title}
                  description={service.description}
                  isExpanded={expandedId === service.id}
                  onToggle={() => handleToggleService(service.id)}
                  details={service.details}
                />
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Testimonials Section */}
        <ScrollSection id="reviews" className={`${styles.section} ${styles.bgAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.subheading}>
                {reviewsSectionHeader.subheading}
              </span>

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