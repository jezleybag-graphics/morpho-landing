import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface-muted text-text-primary pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-border/40">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary-dark mb-4">Terms of Service</h1>
          <p className="text-text-secondary">Last Updated: June 2026</p>
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using the Morpho Customer App ("App"), you agree to be bound by these Terms of Service. 
              The App is operated by Morpho Online Store (doing business as Morpho Cafe & Studio). If you do not agree with 
              these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">2. Scope of Service</h2>
            <p>
              Morpho Cafe & Studio offers local food and beverage delivery and pickup services strictly within Cuyapo. 
              We reserve the right to limit or refuse service to any address outside our designated delivery zones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">3. Orders and Payment</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Pricing:</strong> All prices are in Philippine Peso (PHP). Prices are subject to change without prior notice, but the price at checkout is final.</li>
              <li><strong>Payment Methods:</strong> We accept Cash on Delivery (COD), Xendit E-payment (including GCash and Maya), and direct Bank Transfers.</li>
              <li><strong>Order Finality:</strong> Once an order is confirmed and preparation has started, it cannot be modified or canceled.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">4. Delivery Times & Disclaimer</h2>
            <p>
              While we strive to deliver your orders as quickly as possible, <strong>we do not provide estimated minutes of arrival.</strong> 
              Delivery times are heavily dependent on order volume, food preparation time, traffic conditions, and weather. 
              Morpho Cafe & Studio shall not be held liable for delivery delays outside of our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">5. User Requirements</h2>
            <p>
              Minors are allowed to use the App to place orders only with the explicit consent and guidance of a parent or legal guardian. 
              The parent or guardian assumes full responsibility for all transactions and payments made by the minor using the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">6. Intellectual Property</h2>
            <p>
              All content, logos, branding, and materials within the App are the intellectual property of Morpho Cafe & Studio. 
              You may not reproduce, distribute, or use our intellectual property without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary-dark mb-3">7. Contact Information</h2>
            <p>For questions or concerns regarding these terms, please contact us:</p>
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

export default TermsOfService;
