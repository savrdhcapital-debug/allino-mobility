"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageShell from "../PageShell";
import { vehicles } from "../../lib/vehicles";

export default function Book(){
  const router = useRouter();
  const [type,setType]=useState<"Car"|"Bike">("Car");
  const [vehicle,setVehicle]=useState("alto-cng");
  const [pickupDate,setPickupDate]=useState("");
  const [returnDate,setReturnDate]=useState("");
  const [submitted,setSubmitted]=useState(false);
  const selected=vehicles.find(v=>v.slug===vehicle)||vehicles[0];
  const list=useMemo(()=>vehicles.filter(v=>v.category===type),[type]);
  const today = new Date().toISOString().slice(0,10);

  function changeType(nextType:"Car"|"Bike"){
    setType(nextType);
    const first=vehicles.find(v=>v.category===nextType);
    if(first) setVehicle(first.slug);
  }

  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=new FormData(e.currentTarget);
    const booking={
      id:`ALN-${Date.now().toString().slice(-6)}`,
      pickup:String(form.get("pickup")||"Bhopal, Madhya Pradesh"),
      pickupDate:String(form.get("pickupDate")||""),
      pickupTime:String(form.get("pickupTime")||""),
      returnDate:String(form.get("returnDate")||""),
      returnTime:String(form.get("returnTime")||""),
      vehicle:selected.name,
      vehicleSlug:selected.slug,
      category:selected.category,
      customerName:String(form.get("customerName")||""),
      phone:String(form.get("phone")||""),
      email:String(form.get("email")||""),
      documentNo:String(form.get("documentNo")||""),
      amount:selected.pricePerDay,
    };
    sessionStorage.setItem("allino:last-booking",JSON.stringify(booking));
    setSubmitted(true);
    setTimeout(()=>router.push("/booking/confirmation/"),250);
  }

  return <PageShell title="Book Your Ride" kicker="BOOKING"><section className="section"><div className="container booking-layout"><form className="booking-form" onSubmit={submit}>
    <div className="segmented"><button type="button" className={type==="Car"?"active":""} onClick={()=>changeType("Car")}>🚗 Self-Drive Car</button><button type="button" className={type==="Bike"?"active":""} onClick={()=>changeType("Bike")}>🛵 Self-Ride Bike</button></div>
    <div className="booking-grid">
      <label>Pickup Location<input name="pickup" defaultValue="Bhopal, Madhya Pradesh" required/></label>
      <label>Pickup Date<input name="pickupDate" type="date" min={today} value={pickupDate} onChange={e=>{setPickupDate(e.target.value);if(returnDate && returnDate<e.target.value)setReturnDate(e.target.value)}} required/></label>
      <label>Pickup Time<input name="pickupTime" type="time" defaultValue="10:00" required/></label>
      <label>Return Date<input name="returnDate" type="date" min={pickupDate||today} value={returnDate} onChange={e=>setReturnDate(e.target.value)} required/></label>
      <label>Return Time<input name="returnTime" type="time" defaultValue="10:00" required/></label>
      <label>Vehicle<select name="vehicle" value={vehicle} onChange={e=>setVehicle(e.target.value)}>{list.map(v=><option value={v.slug} key={v.slug}>{v.name}</option>)}</select></label>
      <label>Transmission<select name="transmission" value={selected.transmission} disabled><option>{selected.transmission}</option></select></label>
      <label>Customer Name<input name="customerName" required placeholder="Full name"/></label>
      <label>Phone Number<input name="phone" required placeholder="10-digit mobile" pattern="[0-9]{10}" inputMode="numeric"/></label>
      <label>Email<input name="email" type="email" required placeholder="you@example.com"/></label>
      <label>KYC / Document No.<input name="documentNo" required placeholder="Driving licence / ID"/></label>
    </div>
    <button className="btn primary search" type="submit">CONTINUE TO CONFIRMATION</button>{submitted&&<div className="success-box">Booking details saved. Opening your confirmation…</div>}
  </form><aside className="booking-summary"><div className="section-kicker">BOOKING SUMMARY</div><div className="summary-image"><img src={selected.image} alt={selected.name}/></div><h2>{selected.name}</h2><p>{selected.seats} · {selected.fuel} · {selected.transmission}</p><div className="summary-line"><span>Base price</span><b>₹{selected.pricePerDay.toLocaleString("en-IN")}</b></div><div className="summary-line"><span>Support</span><b>24×7</b></div><div className="summary-total"><span>Estimated total</span><strong>₹{selected.pricePerDay.toLocaleString("en-IN")}/day</strong></div><Link className="btn outline full" href={`/fleet/${selected.slug}/`}>View Vehicle Details</Link></aside></div></section></PageShell>
}
