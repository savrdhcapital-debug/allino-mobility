import Link from "next/link";
import PageShell from "../../PageShell";
import PrintButton from "./PrintButton";

export default function Confirmation() {
  return (
    <PageShell title="Booking Confirmed" kicker="ALLINO BOOKING">
      <section className="section">
        <div className="container confirmation">
          <div className="success-icon">✓</div>
          <h2>Your ride is reserved.</h2>
          <p>
            Your booking request has been captured. The final confirmation will be issued after KYC and payment verification.
          </p>
          <div className="confirmation-card">
            <div><span>Booking ID</span><b>ALLINO-2026-00124</b></div>
            <div><span>Vehicle</span><b>Alto CNG</b></div>
            <div><span>Pickup</span><b>Bhopal, Madhya Pradesh</b></div>
            <div><span>Amount</span><b>₹1,800/day</b></div>
          </div>
          <div className="detail-actions">
            <Link className="btn primary" href="/fleet/">Browse Fleet</Link>
            <PrintButton />
            <Link className="btn outline" href="/contact/">Contact Support</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
