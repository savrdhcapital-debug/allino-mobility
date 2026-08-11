"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setBusy(true);
    const form = new FormData(e.currentTarget);
    try {
      await register({ name: String(form.get("name")), phone: String(form.get("phone")), email: String(form.get("email")), password: String(form.get("password")) });
      router.push("/dashboard/");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to create account.");
    } finally { setBusy(false); }
  }

  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white"><div className="mx-auto max-w-md"><Link href="/" className="text-2xl font-black">ALLINO</Link><div className="mt-10 rounded-3xl bg-white p-7 text-slate-900 shadow-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">Customer Portal</p><h1 className="mt-2 text-3xl font-extrabold">Create your account</h1><p className="mt-2 text-slate-500">Book vehicles and manage every trip from one place.</p><form onSubmit={submit} className="mt-7 space-y-4"><label className="block text-sm font-semibold">Full name<input name="name" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Your name" /></label><label className="block text-sm font-semibold">Phone<input name="phone" required type="tel" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="+91" /></label><label className="block text-sm font-semibold">Email<input name="email" required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="you@example.com" /></label><label className="block text-sm font-semibold">Password<input name="password" required minLength={8} type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Minimum 8 characters" /></label><button disabled={busy} className="w-full rounded-2xl bg-blue-700 px-5 py-3.5 font-bold text-white disabled:opacity-60">{busy ? "CREATING…" : "CREATE ACCOUNT"}</button>{message && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{message}</p>}</form><p className="mt-6 text-center text-sm text-slate-500">Already registered? <Link href="/login" className="font-bold text-blue-600">Sign in</Link></p></div></div></main>;
}
