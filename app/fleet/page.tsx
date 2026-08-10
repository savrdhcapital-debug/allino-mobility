import Link from "next/link"; import PageShell from "../PageShell";

const realPhoto = (file: string) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;

const cars=[
  ['Alto CNG',realPhoto('Maruti Suzuki - Alto 800 LXi.JPG'),'₹1,800'],
  ['WagonR CNG',realPhoto('Maruti Wagon R Front.JPG'),'₹2,000'],
  ['Dzire CNG',realPhoto('Maruti Suzuki Dzire VXi VVT.JPG'),'₹2,200'],
  ['Swift',realPhoto('Swift.jpg'),'₹2,300'],
  ['Activa 6G',realPhoto('Honda Activa 6G.jpg'),'₹199'],
  ['Access 125',realPhoto('Suzuki Access 125, 2023.jpg'),'₹219'],
  ['Jupiter 125',realPhoto('Jupiter vehicle.jpg'),'₹229'],
];

export default function Fleet(){return <PageShell title="Our Fleet" kicker="OUR FLEET"><section className="section"><div className="container"><div className="fleet-grid">{cars.map(([name,img,price])=><article className="vehicle-card" key={name}><div className="vehicle-image"><span>AVAILABLE</span><em>Available*</em><img src={img} alt={name} loading="lazy"/></div><div className="vehicle-body"><div className="vehicle-title"><h3>{name}</h3><b>★ 4.8</b></div><p>Well maintained · Verified · Ready to ride</p><div className="vehicle-price"><strong>{price}<small>/day</small></strong><Link className="btn primary" href="/book/">Book Now</Link></div></div></article>)}</div></div></section></PageShell>}
