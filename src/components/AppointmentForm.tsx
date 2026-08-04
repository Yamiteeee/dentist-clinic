'use client';

import { useState, FormEvent } from 'react';
import { servicesData, appointmentFormContent } from '@/data/landingData';
import styles from './styles/AppointmentForm.module.css';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.title}>{appointmentFormContent.title}</h3>
      <p className={styles.subtitle}>{appointmentFormContent.subtitle}</p>

      {submitted ? (
        <div className={styles.successState}>
          <h4>{appointmentFormContent.successTitle}</h4>
          <p>{appointmentFormContent.successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className={styles.input}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="tel"
                required
                placeholder="(555) 000-0000"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Service Needed</label>
              <select className={styles.select}>
                {servicesData.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="Emergency Care">Emergency Care</option>
              </select>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Preferred Date</label>
            <input type="date" required className={styles.input} />
          </div>

          <button type="submit" className={styles.submitBtn}>
            {appointmentFormContent.buttonText}
          </button>
        </form>
      )}
    </div>
  );
}