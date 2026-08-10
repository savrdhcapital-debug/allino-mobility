"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CarFront, CheckCircle2, Headphones, KeyRound, ShieldCheck, Smartphone, Tag, type LucideIcon } from "lucide-react";

const VEHICLE_IMAGES = {
  alto: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:c83fe052-96e3-4df4-8ef1-403beabd57cb/as/5EA63CDAD5E1457EAAD114938980D06F.png",
  activa: "https://images.91wheels.com/assets/b_images/gallery/honda/activa-6g/honda-activa-6g-1-1768544628.png",
  wagonr: "https://img1.kakaku.k-img.com/images/productimage/fullscale/K0000940369.jpg",
  dzire: "https://www.nicepng.com/png/detail/258-2589513_new-swift-dzire-2018.png",
};

const BHOPAL_HERO = "https://commons.wikimedia.org/wiki/Special:FilePath/Taj-ul-masajid%20bhopal.jpg";

const vehicles = [
  { name: "Alto CNG", type: "CAR", meta: "4 Seats · CNG · Manual", price: "₹1,800", image: VEHICLE_IMAGES.alto },
  { name: "Activa 6G", type: "BIKE", meta: "2 Seats · Petrol · Automatic", price: "₹199", image: VEHICLE_IMAGES.activa },
  { name: "WagonR CNG", type: "CAR", meta: "5 Seats · CNG · Manual", price: "₹2,000", image: VEHICLE_IMAGES.wagonr },
  { name: "Dzire CNG", type: "CAR", meta: "4 Seats · CNG · Manual", price: "₹2,200", image: VEHICLE_IMAGES.dzire },
];

const steps: [string, LucideIcon, string, string][] = [
  ["01", CarFront, "Choose Vehicle", "Browse our cars and bikes."],
  ["02", CalendarDays, "Select Dates", "Pick pickup and return dates."],
  ["03", CheckCircle2, "Submit KYC", "Verify your documents quickly."],
  ["04", ShieldCheck, "Make Payment", "Secure your booking."],
  ["05", KeyRound, "Start Your Ride", "Pick up and ride freely."],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="brand" href="#home">
          <span className="brand-mark">∞</span>
          <span><b>Allino</b><small>Self-Drive Mobility</small></span>
        </a>
        <nav>{["Home", "About Us", "Our Fleet", "Pricing", "How It Works", "Blog", "Contact Us"].map((x) => <a key={x} href={`#${x.toLowerCase().replaceAll(" ", "-")}`}>{x}</a>)}</nav>
        <a className="btn primary" href="#book">Book Now</a>
      </header>

      <section className="hero reference-hero" id="home" style={{ "--hero-image": `url(${BHOPAL_HERO})` } as React.CSSProperties}>
        <div className="reference-hero-overlay" />
        <div className="container reference-hero-inner">
          <motion.div className="reference-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75 }}>
            <div className="eyebrow"><i /> BHOPAL'S SELF-DRIVE MOBILITY</div>
            <h1>Freedom on<br /><span>Your Terms!</span></h1>
            <h2>Rent a Car. Ride a Bike. Move Freely.</h2>
            <p>Self-drive cars &amp; self-ride bikes on rent in Bhopal.<br className="desktop-only" /> Affordable prices, easy booking &amp; trusted service.</p>
            <div className="hero-features">
              <Feature icon={CarFront} text="Self-Drive Freedom" />
              <Feature icon={Tag} text="Affordable Prices" />
              <Feature icon={ShieldCheck} text="Verified & Safe" />
              <Feature icon={Headphones} text="24×7 Support" />
            </div>

            <motion.div className="reference-booking" id="book" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
              <div className="reference-tabs"><button className="active">🚗 Self-Drive Car</button><button>🏍 Self-Ride Bike</button></div>
              <div className="reference-booking-fields">
                <label>Pickup Location<input value="Bhopal, Madhya Pradesh" readOnly /></label>
                <label>Pickup Date<input type="date" defaultValue="2026-08-10" /></label>
                <label>Return Date<input type="date" defaultValue="2026-08-11" /></label>
              </div>
              <a className="btn primary reference-search" href="#our-fleet">SEARCH VEHICLES</a>
            </motion.div>
          </motion.div>

          <motion.div className="reference-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }}>
            <div className="reference-vehicle-stage">
              <img className="reference-car" src={VEHICLE_IMAGES.alto} alt="Maruti Alto CNG" />
              <img className="reference-bike" src={VEHICLE_IMAGES.activa} alt="Honda Activa 6G" />
            </div>
            <div className="reference-app-card"><Smartphone size={34} /><div><b>ALL NEW<br />ALLINO APP</b><span>Book. Ride. Relax.</span><strong>DOWNLOAD NOW →</strong></div></div>
            <div className="store-badges"><span>▶ Google Play</span><span> App Store</span></div>
          </motion.div>
        </div>
      </section>

      <section className="stats reference-stats"><div className="container stats-grid">{[["10,000+", "Happy Customers"], ["20+", "Well Maintained Vehicles"], ["100%", "Secure Payments"], ["24×7", "Customer Support"], ["4.8 / 5", "Customer Rating"]].map(([a, b]) => <div key={b}><b>{a}</b><span>{b}</span></div>)}</div></section>

      <section className="how section" id="how-it-works"><div className="container"><div className="center"><div className="section-kicker">HOW IT WORKS</div><h2>Renting with Allino is simple and hassle-free.</h2></div><div className="steps">{steps.map(([n, Icon, title, text], i) => <motion.div className="step" key={n} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .1 }}><span>{n}</span><div className="step-icon"><Icon /></div><h3>{title}</h3><p>{text}</p>{i < 4 && <div className="connector"><i /></div>}</motion.div>)}</div></div></section>

      <section className="fleet section" id="our-fleet"><div className="container"><div className="section-row"><div><div className="section-kicker">OUR FLEET</div><h2>Choose from our wide range of well-maintained vehicles.</h2><p>Clean, comfortable vehicles designed for everyday freedom.</p></div><a className="btn outline" href="#pricing">View All Vehicles →</a></div><div className="fleet-grid">{vehicles.map((v, i) => <motion.article className="vehicle-card" key={v.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="vehicle-image"><span>{v.type}</span><em>Available*</em><img src={v.image} alt={v.name} /></div><div className="vehicle-body"><div className="vehicle-title"><h3>{v.name}</h3><b>★ 4.8</b></div><p>{v.meta}</p><div className="vehicle-price"><strong>{v.price}<small>/day</small></strong><a className="btn primary" href="#book">Book Now</a></div></div></motion.article>)}</div></div></section>

      <section className="pricing section" id="pricing"><div className="container"><div className="center"><div className="section-kicker">SIMPLE PRICING</div><h2>Pay for the time you need.</h2><p>Short trips, weekends and longer stays.</p></div><div className="plans">{[["1 DAY", "₹1,800"], ["3 DAYS", "₹5,100"], ["7 DAYS", "₹10,500"]].map((p, i) => <article className={i === 1 ? "popular" : ""} key={p[0]}>{i === 1 && <label>POPULAR</label>}<span>{p[0]}</span><strong>{p[1]}<small> / period</small></strong><ul><li>✓ KYC verification</li><li>✓ Support included</li><li>✓ Transparent pricing</li></ul><a className={`btn ${i === 1 ? "primary" : "outline"}`} href="#book">Book Now</a></article>)}</div></div></section>

      <section className="about section" id="about-us"><div className="container about-grid"><div className="about-photo"><img src={BHOPAL_HERO} alt="Taj-ul-Masajid, Bhopal" /></div><div><div className="section-kicker">ABOUT ALLINO</div><h2>Your trusted mobility partner in Bhopal.</h2><p>Allino gives customers a simple way to rent clean, verified cars and scooters without the cost of ownership.</p><div className="checks"><span>✓ Customer-first approach</span><span>✓ Transparent pricing</span><span>✓ Well-maintained fleet</span><span>✓ Responsive support</span></div><a className="btn primary" href="#contact">About Allino <ArrowRight size={18} /></a></div></div></section>

      <section className="contact section" id="contact"><div className="container contact-box"><div><div className="section-kicker light">READY TO RIDE?</div><h2>Freedom on your terms.</h2><p>Book your next ride or talk to our team.</p></div><div className="contact-actions"><a className="btn yellow" href="tel:+919893345906">Call +91 98933 45906</a><a className="btn light" href="#book">Book a Ride →</a></div></div></section>
      <footer><div className="container footer-grid"><div><a className="brand" href="#home"><span className="brand-mark">∞</span><span><b>Allino</b><small>Self-Drive Mobility</small></span></a><p>Self-drive cars and self-ride bikes in Bhopal. Freedom on your terms.</p></div><div><b>Company</b><a href="#about-us">About Us</a><a href="#our-fleet">Our Fleet</a><a href="#pricing">Pricing</a></div><div><b>Support</b><a href="#how-it-works">How It Works</a><a href="#contact">Contact</a><a href="#book">Book Now</a></div><div><b>Contact</b><span>Bhopal, Madhya Pradesh</span><a href="tel:+919893345906">+91 98933 45906</a></div></div><div className="copyright">© 2026 Allino Mobility. All rights reserved.</div></footer>
    </main>
  );
}

function Feature({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return <div><Icon /><span>{text}</span></div>;
}
