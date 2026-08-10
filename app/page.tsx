"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CarFront, CheckCircle2, Headphones, KeyRound, MapPin, ShieldCheck, Smartphone, Tag, type LucideIcon } from "lucide-react";

const altoPhoto = "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20K10.jpg";
const activaPhoto = "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa%206G.jpg";

const vehicles = [
  { name: "Alto CNG", type: "CAR", meta: "4 Seats · CNG · Manual", price: "₹1,800", image: altoPhoto },
  { name: "Activa 6G", type: "BIKE", meta: "2 Seats · Petrol · Automatic", price: "₹199", image: activaPhoto },
  { name: "WagonR CNG", type: "CAR", meta: "5 Seats · CNG · Manual", price: "₹2,000", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20WagonR.jpg" },
  { name: "Dzire CNG", type: "CAR", meta: "4 Seats · CNG · Manual", price: "₹2,200", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Swift%20Dzire.jpg" },
];

const steps: [string, LucideIcon, string, string][] = [
  ["01", CarFront, "Choose Vehicle", "Browse our cars and bikes."],
  ["02", CalendarDays, "Select Dates", "Pick pickup and return dates."],
  ["03", CheckCircle2, "Submit KYC", "Verify your documents quickly."],
  ["04", ShieldCheck, "Make Payment", "Secure your booking."],
  ["05", KeyRound, "Start Your Ride", "Pick up and ride freely."],
];

export default function Home() {
  return <main>
    <header className="header">
      <a className="brand" href="#home"><span className="brand-mark">∞</span><span><b>Allino</b><small>Self-Drive Mobility</small></span></a>
      <nav>{["Home", "About Us", "Our Fleet", "Pricing", "How It Works", "Blog", "Contact Us"].map(x => <a key={x} href={`#${x.toLowerCase().replaceAll(" ", "-")}`}>{x}</a>)}</nav>
      <a className="btn primary" href="#book">▣ &nbsp; BOOK NOW</a>
    </header>

    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }}>
          <div className="eyebrow"><i /> BHOPAL'S SELF-DRIVE MOBILITY</div>
          <h1>Freedom on<br /><span>Your Terms!</span></h1>
          <h2>Rent a Car. Ride a Bike. Move Freely.</h2>
          <p>Self-drive cars & self-ride bikes on rent in Bhopal — affordable prices, easy booking & trusted service.</p>
          <div className="hero-features">
            <Feature icon={CarFront} text="Self-Drive Freedom" />
            <Feature icon={Tag} text="Affordable Prices" />
            <Feature icon={ShieldCheck} text="Verified & Safe" />
            <Feature icon={Headphones} text="24×7 Support" />
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .85, delay: .15 }}>
          <div className="hero-landmark" />
          <motion.img className="hero-car" src={altoPhoto} alt="Maruti Suzuki Alto rental car" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.img className="hero-bike" src={activaPhoto} alt="Honda Activa rental scooter" animate={{ y: [0, 9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: .4 }} />
          <motion.div className="hero-app" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}><Smartphone size={30} /><b>ALLINO APP</b><span>Book. Ride. Relax.</span><strong>DOWNLOAD NOW →</strong></motion.div>
        </motion.div>
      </div>

      <motion.div className="container booking" id="book" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>
        <div className="section-kicker">BOOK YOUR RIDE</div>
        <div className="booking-title"><div><h3>Find your perfect ride</h3><p>Choose a vehicle and select your dates.</p></div><div className="tabs"><button className="active">🚗 Self-Drive Car</button><button>🏍 Self-Ride Bike</button></div></div>
        <div className="booking-grid">
          <label><span>Pickup Location</span><div className="input-like"><MapPin size={16} /> Bhopal, Madhya Pradesh</div></label>
          <label><span>Pickup Date</span><input type="date" /></label>
          <label><span>Return Date</span><input type="date" /></label>
          <a className="btn primary search" href="#our-fleet">SEARCH VEHICLES <ArrowRight size={17} /></a>
        </div>
      </motion.div>
    </section>

    <section className="stats"><div className="container stats-grid">{[["10,000+", "Happy Customers"], ["20+", "Well Maintained Vehicles"], ["100%", "Secure Payments"], ["24×7", "Customer Support"], ["4.8 / 5", "Customer Rating"]].map(([a, b]) => <div key={b}><b>{a}</b><span>{b}</span></div>)}</div></section>

    <section className="how section" id="how-it-works"><div className="container"><div className="center"><div className="section-kicker">HOW IT WORKS</div><h2>Renting with Allino is simple and hassle-free.</h2></div><div className="steps">{steps.map(([n, Icon, title, text], i) => <motion.div className="step" key={n} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .1 }}><span>{n}</span><div className="step-icon"><Icon /></div><h3>{title}</h3><p>{text}</p>{i < 4 && <div className="connector"><i /></div>}</motion.div>)}</div></div></section>

    <section className="fleet section" id="our-fleet"><div className="container"><div className="section-row"><div><div className="section-kicker">OUR FLEET</div><h2>Clean, comfortable vehicles designed for everyday freedom.</h2><p>Real vehicles. Real photos. Ready for your next ride.</p></div><a className="btn outline" href="#pricing">View All Vehicles →</a></div><div className="fleet-grid">{vehicles.map((v, i) => <motion.article className="vehicle-card" key={v.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="vehicle-image"><span>{v.type}</span><em>Available*</em><img src={v.image} alt={v.name} loading="lazy" /></div><div className="vehicle-body"><div className="vehicle-title"><h3>{v.name}</h3><b>★ 4.8</b></div><p>{v.meta}</p><div className="vehicle-price"><strong>{v.price}<small>/day</small></strong><a className="btn primary" href="#book">Book Now</a></div></div></motion.article>)}</div></div></section>

    <section className="pricing section" id="pricing"><div className="container"><div className="center"><div className="section-kicker">SIMPLE PRICING</div><h2>Pay for the time you need.</h2><p>Short trips, weekends and longer stays.</p></div><div className="plans">{[["1 DAY", "₹1,800"], ["3 DAYS", "₹5,100"], ["7 DAYS", "₹10,500"]].map((p, i) => <article className={i === 1 ? "popular" : ""} key={p[0]}>{i === 1 && <label>POPULAR</label>}<span>{p[0]}</span><strong>{p[1]}<small> / period</small></strong><ul><li>✓ KYC verification</li><li>✓ Support included</li><li>✓ Transparent pricing</li></ul><a className={`btn ${i === 1 ? "primary" : "outline"}`} href="#book">Book Now</a></article>)}</div></div></section>

    <section className="about section" id="about-us"><div className="container about-grid"><div className="about-photo"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Taj-ul-masajid%20bhopal.jpg" alt="Bhopal landmark" loading="lazy" /></div><div><div className="section-kicker">ABOUT ALLINO</div><h2>Your trusted mobility partner in Bhopal.</h2><p>Allino gives customers a simple way to rent clean, verified cars and scooters without the cost of ownership.</p><div className="checks"><span>✓ Customer-first approach</span><span>✓ Transparent pricing</span><span>✓ Well-maintained fleet</span><span>✓ Responsive support</span></div><a className="btn primary" href="#contact">About Allino <ArrowRight size={18} /></a></div></div></section>

    <section className="contact section" id="contact"><div className="container contact-box"><div><div className="section-kicker light">READY TO RIDE?</div><h2>Freedom on your terms.</h2><p>Book your next ride or talk to our team.</p></div><div className="contact-actions"><a className="btn yellow" href="tel:+919893345906">Call +91 98933 45906</a><a className="btn light" href="#book">Book a Ride →</a></div></div></section>

    <footer><div className="container footer-grid"><div><a className="brand" href="#home"><span className="brand-mark">∞</span><span><b>Allino</b><small>Self-Drive Mobility</small></span></a><p>Self-drive cars and self-ride bikes in Bhopal. Freedom on your terms.</p><small className="photo-credit">Vehicle photos: Wikimedia Commons (CC BY-SA).</small></div><div><b>Company</b><a href="#about-us">About Us</a><a href="#our-fleet">Our Fleet</a><a href="#pricing">Pricing</a></div><div><b>Support</b><a href="#how-it-works">How It Works</a><a href="#contact">Contact</a><a href="#book">Book Now</a></div><div><b>Contact</b><span>Bhopal, Madhya Pradesh</span><a href="tel:+919893345906">+91 98933 45906</a></div></div><div className="copyright">© 2026 Allino Mobility. All rights reserved.</div></footer>
  </main>;
}

function Feature({ icon: Icon, text }: { icon: LucideIcon; text: string }) { return <div><Icon /><span>{text}</span></div>; }
