"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatCurrencyINR } from "@/lib/utils";

type Mode = "new" | "transfer";

const calculateEmi = (principal: number, annualRate: number, years: number) => {
  const months = Math.max(1, years * 12);
  const monthlyRate = annualRate / 12 / 100;
  if (!monthlyRate) return principal / months;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
};

export function EMICalculator() {
  const [mode, setMode] = useState<Mode>("new");
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [currentRate, setCurrentRate] = useState(10.25);
  const [transferCost, setTransferCost] = useState(50000);

  const result = useMemo(() => {
    const emi = calculateEmi(amount, rate, tenure);
    const totalPayment = emi * tenure * 12;
    const currentEmi = calculateEmi(amount, currentRate, tenure);
    const transferSavings = Math.max(0, currentEmi * tenure * 12 - totalPayment - transferCost);
    return { emi: Math.round(emi), totalInterest: Math.round(totalPayment - amount), totalPayment: Math.round(totalPayment), currentEmi: Math.round(currentEmi), transferSavings: Math.round(transferSavings) };
  }, [amount, rate, tenure, currentRate, transferCost]);

  const principalPercent = Math.round((amount / result.totalPayment) * 100);

  return <div className="grid grid-cols-1 gap-8 rounded-xl3 border border-navy/5 bg-white p-6 shadow-soft md:p-10 lg:grid-cols-[1fr_0.85fr]">
    <div className="space-y-7">
      <div className="flex rounded-full bg-navy/5 p-1" role="tablist" aria-label="Calculator mode">
        <button type="button" role="tab" aria-selected={mode === "new"} onClick={() => setMode("new")} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold ${mode === "new" ? "bg-navy text-white" : "text-navy/60"}`}>New home loan</button>
        <button type="button" role="tab" aria-selected={mode === "transfer"} onClick={() => setMode("transfer")} className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold ${mode === "transfer" ? "bg-navy text-white" : "text-navy/60"}`}>Balance transfer</button>
      </div>
      <SliderField label={mode === "transfer" ? "Outstanding loan balance" : "Loan amount"} value={amount} onChange={setAmount} min={500000} max={30000000} step={100000} format={formatCurrencyINR} />
      {mode === "transfer" && <SliderField label="Current interest rate" value={currentRate} onChange={setCurrentRate} min={6} max={16} step={0.1} format={(v) => `${v.toFixed(1)}%`} />}
      <SliderField label={mode === "transfer" ? "New transfer rate" : "Interest rate"} value={rate} onChange={setRate} min={6} max={14} step={0.1} format={(v) => `${v.toFixed(1)}%`} />
      <SliderField label={mode === "transfer" ? "Remaining tenure" : "Loan tenure"} value={tenure} onChange={setTenure} min={1} max={30} step={1} format={(v) => `${v} years`} />
      {mode === "transfer" && <SliderField label="Estimated transfer costs" value={transferCost} onChange={setTransferCost} min={0} max={200000} step={5000} format={formatCurrencyINR} />}
      <p className="text-xs leading-relaxed text-slate/55">Illustration only. EMI, interest and savings are estimates based on the values entered and exclude lender-specific fees, insurance, taxes and prepayment terms.</p>
    </div>
    <div className="flex flex-col justify-center rounded-xl2 bg-navy-gradient p-7 text-white md:p-8">
      <p className="text-xs uppercase tracking-widest text-gold">Estimated monthly EMI</p>
      <motion.p key={result.emi} initial={{ opacity: .4, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-2 font-display text-4xl font-bold md:text-5xl">{formatCurrencyINR(result.emi)}</motion.p>
      <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-white/10"><motion.div className="h-full bg-gold-gradient" animate={{ width: `${principalPercent}%` }} /></div>
      <div className="mt-2 flex justify-between text-xs text-white/60"><span>Principal {principalPercent}%</span><span>Interest {100 - principalPercent}%</span></div>
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm"><div><p className="text-white/50">Total interest</p><p className="mt-1 font-semibold text-gold">{formatCurrencyINR(result.totalInterest)}</p></div><div><p className="text-white/50">Total payment</p><p className="mt-1 font-semibold text-gold">{formatCurrencyINR(result.totalPayment)}</p></div></div>
      {mode === "transfer" && <div className="mt-6 rounded-xl bg-white/10 p-4"><p className="text-xs uppercase tracking-widest text-white/55">Estimated saving after costs</p><p className="mt-1 font-display text-2xl font-semibold text-gold">{formatCurrencyINR(result.transferSavings)}</p><p className="mt-1 text-xs text-white/55">Current EMI: {formatCurrencyINR(result.currentEmi)} · New EMI: {formatCurrencyINR(result.emi)}</p></div>}
      <a href="#loan-enquiry" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light">Discuss these numbers <ArrowRight size={16} /></a>
    </div>
  </div>;
}

function SliderField({ label, value, onChange, min, max, step, format }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; format: (v: number) => string }) {
  return <div><div className="mb-2 flex items-center justify-between gap-4"><label className="text-sm font-medium text-navy/70">{label}</label><span className="font-display text-sm font-semibold text-gold-dark">{format(value)}</span></div><input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-navy/10 accent-gold" aria-label={label} /></div>;
}
