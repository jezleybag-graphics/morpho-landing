import React from 'react';
import { Link } from 'react-router-dom';

function Support() {
  return (
    <div className="min-h-screen bg-surface-muted text-text-primary pt-32 pb-24 px-6 font-sans relative overflow-hidden">
      {/* Background blobs for thematic consistency */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] max-w-[500px] aspect-square rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute top-[10%] right-[-10%] w-[60vw] max-w-[600px] aspect-square rounded-[40%_60%_70%_30%] bg-accent/10 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-[36px] md:text-[44px] font-display font-extrabold text-primary-dark mb-4">How can we help?</h1>
          <p className="text-[16px] md:text-[18px] text-text-secondary max-w-lg mx-auto leading-relaxed">
            Have a question about your order or need assistance? Reach out to the Morpho Cafe & Studio team through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Facebook Card */}
          <a 
            href="https://fb.com/morphocafeandstudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-[24px] border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <div className="w-12 h-12 rounded-[14px] bg-[#E8F0FE] text-[#1877F2] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ion-icon name="logo-facebook" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <h3 className="text-[18px] font-display font-bold text-primary-dark mb-1">Facebook Page</h3>
            <p className="text-[15px] text-text-secondary">Message us directly on Facebook for quick assistance.</p>
            <p className="mt-4 text-[14px] font-semibold text-primary group-hover:text-primary-dark">fb.com/morphocafeandstudio &rarr;</p>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:morphocafeandstudio@gmail.com" 
            className="bg-white p-8 rounded-[24px] border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <div className="w-12 h-12 rounded-[14px] bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ion-icon name="mail" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <h3 className="text-[18px] font-display font-bold text-primary-dark mb-1">Email Support</h3>
            <p className="text-[15px] text-text-secondary">Send us a detailed email for formal inquiries or issues.</p>
            <p className="mt-4 text-[14px] font-semibold text-primary group-hover:text-primary-dark">morphocafeandstudio@gmail.com &rarr;</p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+639393991289" 
            className="bg-white p-8 rounded-[24px] border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <div className="w-12 h-12 rounded-[14px] bg-success/10 text-success flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ion-icon name="call" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <h3 className="text-[18px] font-display font-bold text-primary-dark mb-1">Call Us</h3>
            <p className="text-[15px] text-text-secondary">Need urgent help with an active order? Give us a call.</p>
            <p className="mt-4 text-[14px] font-semibold text-primary group-hover:text-primary-dark">+639393991289 &rarr;</p>
          </a>

          {/* Location Card */}
          <a 
            href="https://maps.app.goo.gl/ZuqueTRhvPSErbqd9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-[24px] border border-border/40 shadow-sm hover:shadow-md transition-all duration-300 group outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <div className="w-12 h-12 rounded-[14px] bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <ion-icon name="location" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <h3 className="text-[18px] font-display font-bold text-primary-dark mb-1">Visit the Cafe</h3>
            <p className="text-[15px] text-text-secondary">Drop by Morpho Cafe & Studio for pickup or dine-in.</p>
            <p className="mt-4 text-[14px] font-semibold text-primary group-hover:text-primary-dark">Open in Google Maps &rarr;</p>
          </a>
        </div>

        <div className="bg-white p-4 rounded-[24px] border border-border/40 shadow-sm mb-12 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1350.596858028518!2d120.66039378196479!3d15.777264273584718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3391314436083301%3A0x1e846074bbf43832!2sMorpho%20Cafe%20%26%20Studio%2C%20Joaquin%20St%2C%20Cuyapo%2C%203117%20Nueva%20Ecija!3m2!1d15.777297899999999!2d120.6616675!4m5!1s0x3391314436083301%3A0x1e846074bbf43832!2sMorpho%20Cafe%20%26%20Studio%2C%20Joaquin%20St%2C%20Cuyapo%2C%203117%20Nueva%20Ecija!3m2!1d15.777297899999999!2d120.6616675!5e0!3m2!1sen!2sph!4v1782470288960!5m2!1sen!2sph" 
            className="w-full h-[350px] rounded-[16px]" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin">
          </iframe>
        </div>

        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
            <ion-icon name="arrow-back-outline"></ion-icon>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Support;
