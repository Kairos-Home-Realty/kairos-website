"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { formatCurrencyINR } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function EligibilityChecker() {
  const [income, setIncome] = useState(100000);
  const [obligations, setObligations] = useState(10000);
  const [age, setAge] = useState(30);

  const eligibleAmount = useMemo(() => {
    const netDisposable = Math.max(income - obligations, 0);
    const maxEmi = netDisposable * 0.5;
    const tenureMonths = Math.max((60 - age) * 12, 60);
    const monthlyRate = 8.5 / 12 / 100;
    const eligible =
      (maxEmi * (Math.pow(1 + monthlyRate, tenureMonths) - 1)) /
      (monthlyRate * Math.pow(1 + monthlyRate, tenureMonths));
    return Math.round(eligible / 100000) * 100000;
  }, [income, obligations, age]);

  return (
    <div className="rounded-xl3 border border-navy/5 bg-white p-8 shadow-soft md:p-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Field label="Monthly Income (₹)" value={income} onChange={setIncome} min={20000} max={1000000} step={5000} />
        <Field label="Existing EMIs / Obligations (₹)" value={obligations} onChange={setObligations} min={0} max={200000} step={1000} />
        <Field label="Your Age" value={age} onChange={setAge} min={21} max={58} step={1} />
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-6 rounded-xl2 bg-navy-gradient p-8 text-white md:flex-row">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold">Estimated Eligible Loan Amount</p>
          <motion.p
            key={eligibleAmount}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="mt-2 font-display text-3xl font-bold md:text-4xl"
          >
            {formatCurrencyINR(eligibleAmount)}
          </motion.p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
          <CheckCircle2 size={18} className="text-gold" />
          Indicative estimate only
        </div>
      </div>
      <p className="mt-4 text-xs text-slate/50">
        This is an indicative estimate for guidance purposes. Actual loan
        eligibility depends on lender policy, credit score and complete
        documentation review by our partner banks.
      </p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-navy/70">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-navy/15 px-4 py-3 text-sm font-medium text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
