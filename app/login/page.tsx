"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const heroImage = "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Alto%20K10.jpg";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMessage("Login API is ready to connect. Your credentials were not sent from this preview.");
  };

  return (
    <main className="min-h-screen bg-[#f4f7fc] p-3 font-sans sm:p-5 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(15,35,75,.14)] ring-1 ring-slate-200 sm:min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-64px)]">
        <section className="relative hidden w-[48%] overflow-hidden bg-[#071d49] lg:block">
          <img src={heroImage} alt="Allino rental car" className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(3,23,61,.98)_8%,rgba(5,55,125,.82)_48%,rgba(5,103,215,.55)_100%)]" />
          <div className="relative flex h-full flex-col justify-between p-10 text-white xl:p-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl font-black text-[#1261dc] shadow-lg">∞</span>
                <span><b className="block text-2xl tracking-tight">Allino</b><small className="block text-[10px] font-bold uppercase tracking-[.22em] text-blue-100">Self-Drive Mobility</small></span>
              </Link>
              <div className="mt-28 max-w-md xl:mt-36">
                <p className="text-xs font-extrabold uppercase tracking-[.24em] text-[#ffd21a]">Your freedom, your way</p>
                <h2 className="mt-4 text-5xl font-black leading-[.98] tracking-[-.04em] xl:text-6xl">Drive. Ride. <span className="text-[#ffd21a]">Move freely.</span></h2>
                <p className="mt-6 max-w-sm text-base leading-7 text-blue-50/90">Book trusted self-drive cars and self-ride two-wheelers across Bhopal with simple pricing and a smooth digital experience.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[["24×7","Support"],["20+","Vehicles"],["4.8/5","Rated"]].map(([value,label]) => <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"><b className="block text-lg">{value}</b><span className="text-xs text-blue-100">{label}</span></div>)}
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col justify-center px-6 py-9 sm:px-10 lg:w-[52%] lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-[460px]">
            <div className="mb-9 lg:hidden">
              <Link href="/" className="inline-flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1261dc] text-2xl font-black text-white">∞</span><span><b className="block text-xl text-[#10244b]">Allino</b><small className="block text-[9px] font-bold uppercase tracking-[.18em] text-slate-500">Self-Drive Mobility</small></span></Link>
            </div>
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[.18em] text-[#1261dc]">Customer Portal</span>
              <h1 className="mt-4 text-4xl font-black tracking-[-.04em] text-[#0b214c] sm:text-5xl">Welcome Back!</h1>
              <p className="mt-3 text-[15px] leading-6 text-slate-500">Log in to continue your journey with Allino.</p>
            </div>

            <form onSubmit={submit} className="mt-8 space-y-5">
              <label className="block text-sm font-bold text-[#172b50]">Email Address
                <input required type="email" className="mt-2.5 h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-[15px] text-slate-900 outline-none transition focus:border-[#1261dc] focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="you@example.com" />
              </label>
              <label className="block text-sm font-bold text-[#172b50]">Password
                <span className="relative mt-2.5 block">
                  <input required type={showPassword ? "text" : "password"} className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 pr-16 text-[15px] text-slate-900 outline-none transition focus:border-[#1261dc] focus:bg-white focus:ring-4 focus:ring-blue-100" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-[#1261dc]">{showPassword ? "HIDE" : "SHOW"}</button>
                </span>
              </label>
              <div className="flex items-center justify-end"><Link href="/forgot-password" className="text-sm font-bold text-[#1261dc] hover:underline">Forgot Password?</Link></div>
              <button className="h-14 w-full rounded-2xl bg-[#1261dc] text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(18,97,220,.25)] transition hover:-translate-y-0.5 hover:bg-[#0b55c8]">LOGIN</button>
              {message && <p className="rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm font-medium text-blue-800">{message}</p>}
            </form>

            <div className="my-7 flex items-center gap-4"><span className="h-px flex-1 bg-slate-200" /><span className="text-xs font-bold uppercase tracking-widest text-slate-400">or login with</span><span className="h-px flex-1 bg-slate-200" /></div>
            <div className="grid grid-cols-2 gap-3"><button type="button" className="h-12 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:bg-slate-50">G Google</button><button type="button" className="h-12 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:bg-slate-50"> Apple</button></div>
            <p className="mt-7 text-center text-sm text-slate-500">New to Allino? <Link href="/register" className="font-extrabold text-[#1261dc] hover:underline">Sign Up</Link></p>
            <p className="mt-8 text-center text-[11px] leading-5 text-slate-400">By continuing, you agree to Allino&apos;s Terms &amp; Conditions and Privacy Policy.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
