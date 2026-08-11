"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const vehicleImage = "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20K10.jpg";

export default function AdminLogin() {
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMsg("Admin authentication is ready for the production backend. No credentials were sent from this preview.");
  };

  return (
    <main className="min-h-screen bg-[#eef3fa] p-3 font-sans sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-6xl overflow-hidden rounded-[30px] bg-white shadow-[0_30px_90px_rgba(12,34,72,.16)] ring-1 ring-slate-200 sm:min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-80px)] lg:grid-cols-[46%_54%]">
        <section className="relative hidden overflow-hidden bg-[#061a43] lg:block">
          <img src={vehicleImage} alt="Allino fleet vehicle" className="absolute bottom-0 left-0 w-full object-contain opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(24,113,239,.72),transparent_36%),linear-gradient(160deg,#061a43_0%,#0a3578_56%,#1261dc_100%)]" />
          <div className="relative flex h-full flex-col p-10 text-white xl:p-12">
            <Link href="/" className="inline-flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl font-black text-[#1261dc]">∞</span><span><b className="block text-2xl tracking-tight">Allino</b><small className="block text-[10px] font-bold uppercase tracking-[.22em] text-blue-100">Self-Drive Mobility</small></span></Link>
            <div className="mt-auto max-w-md pb-12">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.22em] text-blue-100 backdrop-blur">Secure Operations Access</span>
              <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-.04em] xl:text-6xl">ALLINO <span className="text-[#ffd21a]">ADMIN</span> CRM</h1>
              <p className="mt-5 max-w-sm text-[15px] leading-7 text-blue-50/90">Complete control for bookings, customers, fleet, payments and business insights — all in one place.</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {[["01","Fleet Control"],["02","Bookings"],["03","Customers"],["04","Reports"]].map(([n,label]) => <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"><span className="text-[10px] font-black text-[#ffd21a]">{n}</span><b className="mt-1 block text-sm">{label}</b></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-16 xl:px-20">
          <div className="w-full max-w-[440px]">
            <div className="mb-9 lg:hidden"><Link href="/" className="inline-flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1261dc] text-2xl font-black text-white">∞</span><span><b className="block text-xl text-[#10244b]">Allino</b><small className="block text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">Admin CRM</small></span></Link></div>
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-xl text-[#1261dc]">⌘</span><div><p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#1261dc]">Operations</p><p className="text-sm font-semibold text-slate-500">Restricted admin access</p></div></div>
            <h2 className="mt-7 text-4xl font-black tracking-[-.04em] text-[#0b214c]">Welcome Back!</h2>
            <p className="mt-3 text-[15px] leading-6 text-slate-500">Sign in to your Allino Admin CRM dashboard.</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
              <label className="block text-sm font-bold text-[#172b50]">Work Email
                <input required type="email" className="mt-2.5 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[15px] text-slate-900 outline-none transition focus:border-[#1261dc] focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="admin@allino.in" />
              </label>
              <label className="block text-sm font-bold text-[#172b50]">Password
                <span className="relative mt-2.5 block"><input required type={showPassword ? "text" : "password"} className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 pr-16 text-[15px] text-slate-900 outline-none transition focus:border-[#1261dc] focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-[#1261dc]">{showPassword ? "HIDE" : "SHOW"}</button></span>
              </label>
              <div className="flex items-center justify-between"><label className="flex items-center gap-2 text-xs font-semibold text-slate-500"><input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#1261dc]" /> Remember me</label><Link href="/forgot-password" className="text-sm font-bold text-[#1261dc] hover:underline">Forgot Password?</Link></div>
              <button className="h-14 w-full rounded-2xl bg-[#1261dc] text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(18,97,220,.25)] transition hover:-translate-y-0.5 hover:bg-[#0b55c8]">SIGN IN TO CRM</button>
              {msg && <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-medium text-blue-800">{msg}</p>}
            </form>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-4"><div className="flex gap-3"><span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span><div><b className="text-sm text-emerald-900">Secure CRM access</b><p className="mt-1 text-xs leading-5 text-emerald-800/80">Only authorised Allino team members should use this portal. Your credentials are protected.</p></div></div></div>
            <p className="mt-7 text-center text-[11px] leading-5 text-slate-400">Allino Admin CRM · Internal Operations · Bhopal, Madhya Pradesh</p>
          </div>
        </section>
      </div>
    </main>
  );
}
