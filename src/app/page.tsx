import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import AppointmentForm from "@/components/AppointmentForm";

import { Smile, Sparkles, Shield, Stethoscope } from "lucide-react";
import {
  servicesSectionHeader,
  servicesData,
  reviewsSectionHeader,
  testimonialsData,
  footerData,
} from "@/data/landingData";

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
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        <About />

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.subheading}>
                {servicesSectionHeader.subheading}
              </span>
              <h2 className={styles.heading}>
                {servicesSectionHeader.heading}
              </h2>
              <p className={styles.description}>
                {servicesSectionHeader.description}
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={<ServiceIcon name={service.iconName} />}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className={`${styles.section} ${styles.bgAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.subheading}>
                {reviewsSectionHeader.subheading}
              </span>
              <h2 className={styles.heading}>
                {reviewsSectionHeader.heading}
              </h2>
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section id="book" className={styles.section}>
          <div className={styles.container}>
            <AppointmentForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            &copy; {new Date().getFullYear()} {footerData.clinicName}.{" "}
            {footerData.copyrightText}
          </p>
        </div>
      </footer>
    </div>
  );
}