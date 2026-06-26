import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCommunityStats } from './hooks/useCommunityStats'

function App() {
  const [isIOSModalOpen, setIsIOSModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, avatars, isLoading } = useCommunityStats()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isIOSModalOpen) {
        setIsIOSModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isIOSModalOpen])

  return (
    <div className="min-h-screen bg-surface-muted text-text-primary overflow-x-hidden relative font-sans">
      
      {/* Organic Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-[1000px] overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-10%] w-[60vw] max-w-[600px] aspect-square rounded-full bg-primary/5 blur-[80px] md:blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 5, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[70vw] max-w-[700px] aspect-square rounded-[40%_60%_70%_30%] bg-accent/10 blur-[100px] md:blur-[140px]" 
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Morpho Cafe Logo" className="h-8 md:h-10 w-auto" />
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-primary-dark">Morpho Cafe</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-semibold text-[15px] text-text-secondary">
            <a href="#taste" className="hover:text-primary focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors outline-none">Why the App?</a>
            <a href="#how" className="hover:text-primary focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors outline-none">How it Works</a>
          </div>
          <a 
            href="#download"
            className="bg-primary text-white px-5 py-2.5 rounded-[14px] font-bold text-[14px] shadow-md hover:bg-primary-dark hover:shadow-lg focus-visible:ring-4 focus-visible:ring-accent/50 transition-all outline-none active:scale-95"
          >
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
        <motion.div 
          className="flex-1 text-center lg:text-left z-10 w-full max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-primary-dark font-bold text-[13px] px-4 py-2 rounded-full mb-6 border border-primary/10 shadow-sm italic">
            <span>"Sip the moment, one cup at a time."</span>
          </div>
          <h1 className="text-[32px] md:text-[44px] lg:text-[52px] font-display font-extrabold tracking-tight leading-[1.15] mb-6 text-primary-dark">
            Cuyapo's first-ever <br className="hidden md:block" />
            <span className="text-gradient-gold">cafe delivery app.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-text-secondary mb-10 leading-[1.6] max-w-lg mx-auto lg:mx-0">
            Bring the true cafe experience home. Enjoy your favorite handcrafted coffee and signature meals from Morpho Cafe & Studio, now just a tap away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=morphocafe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-[16px] font-semibold hover:bg-primary-dark transition-all shadow-[0_8px_20px_rgba(1,62,55,0.2)] hover:shadow-[0_12px_24px_rgba(1,62,55,0.3)] hover:-translate-y-0.5 active:scale-95 focus-visible:ring-4 focus-visible:ring-accent/50 outline-none"
            >
              <ion-icon name="logo-google-playstore" style={{ fontSize: '24px' }}></ion-icon>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[11px] leading-none text-white/80 uppercase tracking-wider font-bold mb-0.5">Get it on</span>
                <span className="text-[16px] leading-tight font-display font-bold">Google Play</span>
              </div>
            </a>
            
            <button 
              onClick={() => setIsIOSModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-primary-dark border border-border/80 px-6 py-4 rounded-[16px] font-semibold hover:bg-surface-subtle transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 focus-visible:ring-4 focus-visible:ring-primary/20 outline-none"
            >
              <ion-icon name="logo-apple" style={{ fontSize: '24px' }}></ion-icon>
              <div className="text-left flex flex-col justify-center">
                <span className="text-[11px] leading-none text-text-tertiary uppercase tracking-wider font-bold mb-0.5">Install on</span>
                <span className="text-[16px] leading-tight font-display font-bold">iOS (Web App)</span>
              </div>
            </button>
          </div>
          
          <div className="flex items-center gap-4 animate-fade-in mt-10" style={{ animationDelay: '0.4s' }}>
            <div className="flex -space-x-3">
              {isLoading ? (
                <>
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-surface-subtle animate-pulse" />
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-surface-subtle animate-pulse" />
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-surface-subtle animate-pulse" />
                </>
              ) : avatars.length > 0 ? (
                avatars.map((url, i) => (
                  <img key={i} src={url} alt="Community Member" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" />
                ))
              ) : (
                <>
                  <img src="https://i.pravatar.cc/100?img=1" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=5" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <img src="https://i.pravatar.cc/100?img=9" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primary-dark">
                {isLoading ? (
                  <span className="block h-5 w-56 bg-surface-subtle animate-pulse rounded" />
                ) : count > 0 ? (
                  `Join ${count} coffee lovers in our community`
                ) : (
                  "Join our community of coffee lovers"
                )}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-[320px] md:max-w-[380px] mx-auto lg:mr-0"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.1, type: "spring", bounce: 0.4 }}
        >
          {/* Mockup Container */}
          <div className="relative z-10 w-full aspect-[1/2] rounded-[44px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[10px] border-white bg-white">
            <img src="/mockup.png" alt="Morpho Cafe App Interface" className="w-full h-full object-cover" />
          </div>
          
          {/* Floating Organic Cards */}
          <motion.div 
            className="absolute top-16 -left-4 md:-left-12 glass-card rounded-[20px] p-3 md:p-4 flex items-center gap-3 md:gap-4 z-20 w-max"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-[14px] bg-success/15 flex items-center justify-center text-success shrink-0">
              <ion-icon name="ticket" style={{ fontSize: '24px' }}></ion-icon>
            </div>
            <div>
              <div className="text-[11px] md:text-[12px] font-bold text-text-secondary uppercase tracking-wide mb-0.5">Promo Applied</div>
              <div className="font-display font-extrabold text-[16px] md:text-[18px] text-text-primary">Free Delivery</div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-20 -right-4 md:-right-8 glass-card rounded-[20px] p-3 md:p-4 flex items-center gap-3 z-20 w-max"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-10 h-10 rounded-[14px] bg-accent/15 flex items-center justify-center text-accent shrink-0">
              <ion-icon name="bicycle" style={{ fontSize: '20px' }}></ion-icon>
            </div>
            <div>
              <div className="text-[11px] md:text-[12px] font-bold text-text-secondary uppercase tracking-wide mb-0.5">Delivery Status</div>
              <div className="font-display font-extrabold text-[16px] md:text-[18px] text-text-primary">On the way</div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="taste" className="py-20 md:py-32 bg-[#FDFBF7] px-6 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-[28px] md:text-[36px] font-display font-extrabold mb-4 text-primary-dark">Crafted for Convenience</h2>
            <p className="text-[16px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We poured the same love into our app as we do our coffee. Enjoy a seamless, beautiful ordering experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
              title="Cafe-Quality Freshness"
              description="We pack every order with extra care, ensuring your cold drinks stay frosty and your hot meals arrive warm."
              badgeText="Signature"
              badgeIcon="star"
            />
            <FeatureCard 
              image="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=800&auto=format&fit=crop"
              title="Brought to You"
              description="Ready to enjoy at home. Track your delivery in real-time straight from Morpho Cafe & Studio."
              badgeText="Live Tracking"
              badgeIcon="bicycle"
            />
            <FeatureCard 
              image="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop"
              title="Good Vibes, Anywhere"
              description="Save your favorites, track your orders easily, and unlock exclusive app-only deals and promos."
              badgeText="Exclusive"
              badgeIcon="gift"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-20 md:py-32 px-6 relative bg-surface-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[28px] md:text-[36px] font-display font-extrabold mb-4 text-primary-dark">Your coffee, three steps away</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-between relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-border border-dashed border-t-2" />
            
            <Step number="1" title="Get the App" desc="Download the Morpho Customer app on your device." />
            <Step number="2" title="Pick Your Favorites" desc="Browse our signature meals and handcrafted coffee." />
            <Step number="3" title="Sip the Moment" desc="Relax while we deliver cafe-quality freshness to your door." />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="download" className="py-24 md:py-32 px-6 text-center bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold mb-6 text-white leading-tight">
            Ready for a better coffee experience?
          </h2>
          <p className="text-[16px] text-white/80 mb-10 max-w-lg mx-auto">
            Experience Cuyapo's first cafe delivery app today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=morphocafe.app" 
              className="bg-white text-primary-dark px-8 py-4 rounded-[16px] font-bold text-[16px] hover:bg-surface-muted transition-transform active:scale-95 w-full sm:w-auto shadow-xl focus-visible:ring-4 focus-visible:ring-white/50 outline-none"
            >
              Get it for Android
            </a>
            <button 
              onClick={() => setIsIOSModalOpen(true)} 
              className="bg-primary-dark text-white border-2 border-white/20 px-8 py-4 rounded-[16px] font-bold text-[16px] hover:bg-white/10 transition-colors w-full sm:w-auto focus-visible:ring-4 focus-visible:ring-white/50 outline-none"
            >
              Install iOS Web App
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-white py-10 px-6 text-center text-text-tertiary text-[14px]">
        <div className="flex items-center justify-center gap-2 mb-4 text-primary-dark">
          <img src="/logo.svg" alt="Morpho Cafe Logo" className="h-6 w-auto" />
          <span className="font-display font-bold tracking-tight">Morpho Cafe</span>
        </div>
        <p>&copy; 2026 Morpho Cafe Ecosystem. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-6 font-medium">
          <Link to="/privacy" className="hover:text-primary transition-colors focus-visible:underline outline-none">Privacy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors focus-visible:underline outline-none">Terms</Link>
          <Link to="/support" className="hover:text-primary transition-colors focus-visible:underline outline-none">Support</Link>
        </div>
      </footer>

      {/* iOS Install Modal (Accessible) */}
      <AnimatePresence>
        {isIOSModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-dark/40 backdrop-blur-sm"
              onClick={() => setIsIOSModalOpen(false)}
              aria-hidden="true"
            />
            <motion.div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, y: 20, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm bg-white rounded-[24px] p-8 shadow-2xl overflow-hidden"
            >
              <button 
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-muted text-text-tertiary hover:bg-border transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
                onClick={() => setIsIOSModalOpen(false)}
                aria-label="Close modal"
              >
                <ion-icon name="close"></ion-icon>
              </button>
              
              <div className="w-16 h-16 bg-surface-subtle rounded-[16px] flex items-center justify-center mb-6 text-primary-dark shadow-sm">
                <ion-icon name="logo-apple" style={{ fontSize: '32px' }}></ion-icon>
              </div>
              
              <h3 id="modal-title" className="text-[22px] font-display font-extrabold mb-3 text-primary-dark">Install on iOS</h3>
              <p className="text-[15px] text-text-secondary mb-8 leading-[1.6]">
                Enjoy the full native experience on your iPhone by adding our Progressive Web App to your home screen.
              </p>
              
              <ol className="space-y-5 mb-8">
                <li className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[13px] shrink-0 mt-0.5">1</div>
                  <div className="text-[14px] leading-relaxed text-text-primary">Open <strong className="font-bold">order.morphocafe.com</strong> in Safari.</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[13px] shrink-0 mt-0.5">2</div>
                  <div className="text-[14px] leading-relaxed text-text-primary">Tap the <strong className="font-bold">Share</strong> icon <span className="inline-flex items-center justify-center w-6 h-6 bg-surface-muted rounded text-text-secondary mx-1"><ion-icon name="share-outline"></ion-icon></span> below.</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[13px] shrink-0 mt-0.5">3</div>
                  <div className="text-[14px] leading-relaxed text-text-primary">Tap <strong className="font-bold">"Add to Home Screen"</strong> <span className="inline-flex items-center justify-center w-6 h-6 bg-surface-muted rounded text-text-secondary mx-1"><ion-icon name="add-square-outline"></ion-icon></span>.</div>
                </li>
              </ol>
              
              <button 
                onClick={() => window.open('https://order.morphocafe.com', '_blank')}
                className="w-full bg-primary text-white font-bold py-4 rounded-[14px] text-[15px] hover:bg-primary-dark transition-all active:scale-95 focus-visible:ring-4 focus-visible:ring-primary/30 outline-none"
              >
                Open Web App
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FeatureCard({ image, title, description, badgeText, badgeIcon }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-[36px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_rgba(1,62,55,0.15)] transition-all duration-500 h-[420px] md:h-[480px] bg-surface-muted"
    >
      {/* Full Bleed Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Floating Badge (Top Left) */}
      <div className="absolute top-5 left-5 z-20">
        <div className="glass-card bg-white/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-white/60 transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500">
          <ion-icon name={badgeIcon} class="text-primary text-[16px]"></ion-icon>
          <span className="text-[12px] font-bold text-primary-dark uppercase tracking-wide">{badgeText}</span>
        </div>
      </div>

      {/* Floating Interactive Elements (Top Right - Decorative) */}
      <div className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/40 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
        <ion-icon name="heart-outline" class="text-[20px]"></ion-icon>
      </div>

      {/* Overlapping Content Box (Bottom) */}
      <div className="absolute bottom-5 left-5 right-5 z-20">
        <div className="bg-white/90 backdrop-blur-xl p-6 rounded-[24px] border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-[22px] font-display font-extrabold mb-2 text-primary-dark">{title}</h3>
          <p className="text-[14px] md:text-[15px] text-text-secondary leading-[1.6] font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Step({ number, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[240px] relative z-10">
      <div className="w-20 h-20 rounded-full bg-white shadow-lg border-[6px] border-surface-subtle flex items-center justify-center text-[24px] font-display font-extrabold text-primary mb-6">
        {number}
      </div>
      <h3 className="text-[18px] font-display font-bold mb-3 text-primary-dark">{title}</h3>
      <p className="text-[15px] text-text-secondary leading-[1.6]">{desc}</p>
    </div>
  )
}

export default App
