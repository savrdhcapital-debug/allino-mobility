"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { currentUser, logout, type AllinoUser } from "@/lib/api";

export default function Dashboard(){
  const router = useRouter();
  const [user, setUser] = useState<AllinoUser | null>(null);
  const [error, setError] = useState("");
  useEffect(() => { currentUser().then(setUser).catch(() => { setError("Please sign in to open your customer dashboard."); router.replace("/login/"); }); }, [router]);
  if (!user && !error) return <main className="grid min-h-screen place-items-center bg-slate-100 text-slate-700">Loading your account…</main>;
  return <main className="min-h-screen bg-slate-100 text-slate-900"><header className="border-b bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5"><Link href="/" className="text-2xl font-black">ALLINO</Link><div className="flex items-center gap-3"><span className="hidden text-sm text-slate-500 sm:block">{user?.name} · Customer Portal</span><button onClick={async()=>{await logout();router.replace("/login/")}} className="rounded-xl border px-4 py-2 text-sm font-bold">Sign out</button></div></div></header><div className="mx-auto max-w-7xl px-5 py-8"><h1 className="text-3xl font-extrabold">Good morning 👋</h1><p className="mt-1 text-slate-500">Manage your rides, documents and support.</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Stat label="Active bookings" value="0"/><Stat label="Completed trips" value="0"/><Stat label="KYC status" value="Pending"/><Stat label="Support" value="24×7"/></div><section className="mt-8 rounded-3xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><h2 className="text-xl font-extrabold">My bookings</h2><Link href="/book/" className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white">Book a ride</Link></div><div className="mt-5 rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-500">Your live bookings will appear here after you make a reservation.</div></section><div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">Profile</h3><p className="mt-2 text-sm text-slate-500">{user?.email}</p></div><div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">KYC & Documents</h3><p className="mt-2 text-sm text-slate-500">Upload and track verification status.</p></div><div className="rounded-2xl bg-white p-5"><h3 className="font-extrabold">Support</h3><p className="mt-2 text-sm text-slate-500">Create and track a support request.</p></div></div></div></main>
}
function Stat({label,value}:{label:string,value:string}){return <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm text-slate-500">{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>}
