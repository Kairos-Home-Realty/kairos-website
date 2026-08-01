"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { formatCurrencyINR } from "@/lib/utils";

export function EMICalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    const emiValue =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const total = emiValue * months;
    return {
      emi: Math.round(emiValue),
      totalInterest: Math.round(total - amount),
      totalPayment: Math.round(total),
    };
  }, [amount, rate, tenure]);

  const principalPercent = Math.round((amount / totalPayment) * 100);

  return (
    <div className="grid grid-cols-1 gap-10 rounded-xl3 border border-navy/5 bg-white p-8 shadow-soft md:p-10 lg:grid-cols-2">
      <div className="space-y-8">
        <SliderField
          label="Loan Amount"
          value={amount}
          onChange={setAmount}
          min={500000}
          max={30000000}
          step={100000}
          format={(v) => formatCurrencyINR(v)}
        />
        <SliderField
          label="Interest Rate"
          value={rate}
          onChange={setRate}
          min={6}
          max={14}
          step={0.1}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <SliderField
          label="Loan Tenure"
          value={tenure}
          onChange={setTenure}
          min={1}
          max={30}
          step={1}
          format={(v) => `${v} years`}
        />
      </div>

      <div className="flex flex-col justify-center rounded-xl2 bg-navy-gradient p-8 text-white">
        <p className="text-xs uppercase tracking-widest text-gold">Your Monthly EMI</p>
        <motion.p
          key={emi}
          initial={{ opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 font-display text-4xl font-bold md:text-5xl"
        >
          {formatCurrencyINR(emi)}
        </motion.p>

        <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full bg-gold-gradient"
            animate={{ width: `${principalPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-white/60">
          <span>Principal {principalPercent}%</span>
          <span>Interest {100 - principalPercent}%</span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
          <div>
            <p className="text-white/50">Total Interest</p>
            <p className="mt-1 font-semibold text-gold">{formatCurrencyINR(totalInterest)}</p>
          </div>
          <div>
            <p className="text-white/50">Total Payment</p>
            <p className="mt-1 font-semibold text-gold">{formatCurrencyINR(totalPayment)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-navy/70">{label}</label>
        <span className="font-display text-sm font-semibold text-gold-dark">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-navy/10 accent-gold"
        aria-label={label}
      />
    </div>
  );
}
