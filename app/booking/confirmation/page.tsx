"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PageShell from "../../PageShell";
import PrintButton from "./PrintButton";

type Booking={id:string;vehicle:string;pickup:string;pickupDate:string;pickupTime:string;returnDate:string;returnTime:string;amount:number;customerName:string};

export default function Confirmation() {
  const [booking,setBooking]=useState<Booking|null>(null);
  useEffect(()=>{
    try{const raw=sessionStorage.getItem("allino:last-booking");if(raw)setBooking(JSON.parse(raw));}catch{}
  },[]);
  const data=booking||{id:"ALLINO-DEMO",vehicle:"Alto CNG",pickup:"Bhopal, Madhya Pradesh",pickupDate:"—",pickupTime:"—",returnDate:"—",returnTime:"—",amount:1800,customerName:"Customer"};
  return <PageShell title="Booking Confirmed" kicker="ALLINO BOOKING">
    <section className="section"><div className="container confirmation">
      <div className="success-icon">✓</div>
      <h2>Your ride request is reserved.</h2>
      <p>Hi {data.customerName || "Customer"}, your booking details have been captured. Final confirmation will be issued after KYC and payment verification.</p>
      <div className="confirmation-card">
        <div><span>Booking ID</span><b>{data.id}</b></div>
        <div><span>Vehicle</span><b>{data.vehicle}</b></div>
        <div><span>Pickup</span><b>{data.pickup}</b></div>
        <div><span>Pickup Date &amp; Time</span><b>{data.pickupDate} · {data.pickupTime}</b></div>
        <div><span>Return Date &amp; Time</span><b>{data.returnDate} · {data.returnTime}</b></div>
        <div><span>Estimated Amount</span><b>₹{Number(data.amount).toLocaleString("en-IN")}/day</b></div>
      </div>
      <div className="detail-actions"><Link className="btn primary" href="/fleet/">Browse Fleet</Link><PrintButton /><Link className="btn outline" href="/contact/">Contact Support</Link></div>
    </div></section>
  </PageShell>;
}
