import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface-muted text-text-primary pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-border/40">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary-dark mb-4">Privacy Policy</h1>
          <p className="text-text-secondary">Last Updated: June 2026</p>
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">1. Introduction</h2>
            <p>
              Morpho Online Store (doing business as Morpho Cafe & Studio) respects your privacy. 
              This Privacy Policy explains how we collect, use, and protect your personal data when you use the Morpho Customer App. 
              We are committed to complying with the Philippine Data Privacy Act of 2012 (Republic Act No. 10173).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">2. Information We Collect</h2>
            <p className="mb-2">To provide our services, we collect the following minimum necessary information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Personal Identifiers:</strong> Name and Phone Number.</li>
              <li><strong>Delivery Information:</strong> Delivery Address.</li>
              <li><strong>Transaction Data:</strong> Order history and preferences.</li>
            </ul>
            <p className="mt-2 text-[14px] bg-primary/5 p-4 rounded-[12px] border border-primary/10">
              <strong>Note:</strong> We do not continuously track your exact GPS location, nor do we use point-based tracking systems. 
              Location data is only used strictly to facilitate order delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">3. How We Use Your Information</h2>
            <p>Your data is used exclusively for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To process, prepare, and deliver your food and beverage orders.</li>
              <li>To communicate with you regarding your order status.</li>
              <li>To provide customer support and handle inquiries.</li>
              <li>To improve our app experience based on general order trends.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">4. Data Sharing and Protection</h2>
            <p>
              We do not sell your personal data. We only share necessary delivery information (Name, Phone Number, Address) 
              with our authorized delivery personnel to fulfill your order. Your data is stored securely using modern encryption 
              standards to prevent unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">5. Children's Privacy</h2>
            <p>
              Minors may use the Morpho Customer App; however, it must be with the strict guidance and consent of a parent or legal guardian. 
              Parents or guardians are responsible for supervising the minor's usage and transactions on the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">6. Your Rights (Under Section 16 of RA 10173)</h2>
            <p>As a data subject, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be informed about how your data is being processed.</li>
              <li>Access the personal data we hold about you.</li>
              <li>Object to the processing of your data.</li>
              <li>Dispute inaccuracy or error in your personal data and have it corrected.</li>
              <li>Suspend, withdraw, or order the blocking, removal, or destruction of your data from our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer at:</p>
            <p className="mt-2 font-medium text-primary-dark">
              Email: <a href="mailto:morphocafeandstudio@gmail.com" className="text-primary hover:underline">morphocafeandstudio@gmail.com</a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
