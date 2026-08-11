"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";

export default function AdminLogin(){
  const router = useRouter();
  const [msg,setMsg]=useState("");
  const [busy,setBusy]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setMsg(""); setBusy(true);
    const form = new FormData(e.currentTarget);
    try {
      const user = await login(String(form.get("email")), String(form.get("password")));
      if (user.role !== "ADMIN") throw new Error("This account is not authorised for CRM access.");
      router.push("/admin/");
    } catch (error) { setMsg(error instanceof Error ? error.message : "Unable to sign in."); }
    finally { setBusy(false); }
  }
  return <main className="min-h-screen bg-slate-950 px-5 py-12 text-white"><div className="mx-auto max-w-md"><Link href="/" className="text-2xl font-black">ALLINO</Link><div className="mt-10 rounded-3xl bg-white p-7 text-slate-900 shadow-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">Operations CRM</p><h1 className="mt-2 text-3xl font-extrabold">Admin sign in</h1><p className="mt-2 text-slate-500">Restricted access for authorised Allino team members.</p><form onSubmit={submit} className="mt-7 space-y-4"><input name="email" required type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="admin@allino.in"/><input name="password" required type="password" className="w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Password"/><button disabled={busy} className="w-full rounded-2xl bg-slate-950 px-5 py-3.5 font-bold text-white disabled:opacity-60">{busy ? "SIGNING IN…" : "SIGN IN TO CRM"}</button>{msg&&<p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{msg}</p>}</form></div></div></main>
}
