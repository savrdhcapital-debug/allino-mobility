"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const submit = (e: FormEvent) => { e.preventDefault(); setMessage("Login API is ready to connect. Your credentials were not sent."); };
  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white"><div className="mx-auto max-w-md"><Link href="/" className="text-2xl font-black tracking-tight">ALLINO</Link><div className="mt-10 rounded-3xl bg-white p-7 text-slate-900 shadow-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">Customer Portal</p><h1 className="mt-2 text-3xl font-extrabold">Welcome back</h1><p className="mt-2 text-slate-500">Sign in to manage bookings, KYC and your profile.</p><form onSubmit={submit} className="mt-7 space-y-4"><label className="block text-sm font-semibold">Email<input required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" placeholder="you@example.com" /></label><label className="block text-sm font-semibold">Password<input required type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" placeholder="••••••••" /></label><div className="flex justify-end"><Link href="/forgot-password" className="text-sm font-semibold text-blue-600">Forgot password?</Link></div><button className="w-full rounded-2xl bg-blue-700 px-5 py-3.5 font-bold text-white transition hover:bg-blue-800">SIGN IN</button>{message && <p className="rounded-xl bg-blue-50 p-3 text-sm text-blue-800">{message}</p>}</form><p className="mt-6 text-center text-sm text-slate-500">New to Allino? <Link href="/register" className="font-bold text-blue-600">Create account</Link></p></div></div></main>;
}
