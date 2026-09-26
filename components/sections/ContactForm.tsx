"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().regex(/^[0-9+\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().optional(),
  requirement: z.string().optional(),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm({
  onSuccess,
  mode = "full",
}: {
  onSuccess?: () => void;
  mode?: "full" | "quick";
}) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (mode === "full" && !data.email) {
      setError("email", { type: "manual", message: "Please enter your email address" });
      return;
    }

    if (data.email && !z.string().email().safeParse(data.email).success) {
      setError("email", { type: "manual", message: "Enter a valid email address" });
      return;
    }

    if (mode === "full") {
      const requiredFields = [
        ["requirement", data.requirement, "Please select a requirement"],
        ["budget", data.budget, "Please select a budget range"],
        ["location", data.location, "Please enter a preferred location"],
      ] as const;
      const missingField = requiredFields.find(([, value]) => !value?.trim());

      if (missingField) {
        setError(missingField[0], { type: "manual", message: missingField[2] });
        return;
      }
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, quick: mode === "quick" }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send your enquiry");
      }

      toast.success(
        "Thank you! Our team will reach out within 24 hours."
      );

      reset();
      onSuccess?.();
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {mode === "quick" && (
        <>
          <Field label="Full Name" error={errors.fullName?.message}>
            <input
              {...register("fullName")}
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className="input-field"
            />
          </Field>
          <Field label="Phone Number" error={errors.phone?.message}>
            <input
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className="input-field"
            />
          </Field>
          <Field label="Email Address (optional)" error={errors.email?.message}>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="input-field"
            />
          </Field>
        </>
      )}

      {mode === "full" && <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Your full name"
            className="input-field"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            className="input-field"
          />
        </Field>
      </div>}

      {mode === "full" && <Field label="Email Address" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="input-field"
        />
      </Field>}

      {mode === "full" && <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Requirement" error={errors.requirement?.message}>
          <select {...register("requirement")} className="input-field" defaultValue="">
            <option value="" disabled>Select requirement</option>
            <option value="buy-property">Buy a Property</option>
            <option value="home-loan">Home Loan Assistance</option>
            <option value="site-visit">Book a Site Visit</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Budget Range" error={errors.budget?.message}>
          <select {...register("budget")} className="input-field" defaultValue="">
            <option value="" disabled>Select budget</option>
            <option value="under-50l">Under ₹50 Lakhs</option>
            <option value="50l-1cr">₹50 Lakhs – ₹1 Crore</option>
            <option value="1cr-2cr">₹1 – 2 Crore</option>
            <option value="above-2cr">Above ₹2 Crore</option>
          </select>
        </Field>
      </div>}

      {mode === "full" && <Field label="Preferred Location" error={errors.location?.message}>
        <input
          {...register("location")}
          type="text"
          placeholder="e.g. Gachibowli, Hyderabad"
          className="input-field"
        />
      </Field>}

      {mode === "full" && <Field label="Message (optional)" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us a bit more about what you're looking for..."
          className="input-field resize-none"
        />
      </Field>}

      <Button type="submit" disabled={isSubmitting} className="w-full justify-center">
        {isSubmitting ? "Sending..." : mode === "quick" ? "Submit" : "Book Consultation"} <Send size={16} />
      </Button>

      <p className="text-center text-xs leading-relaxed text-slate/60">
        We&apos;ll use your details to respond to this enquiry. See our{" "}
        <a href="/privacy-policy" className="font-medium text-navy underline underline-offset-2">
          Privacy Policy
        </a>.
      </p>

      <style jsx global>{`
        .input-field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(7, 27, 59, 0.12);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: #071b3b;
          transition: all 0.2s ease;
          background: white;
        }
        .input-field:focus {
          outline: none;
          border-color: #d6a84f;
          box-shadow: 0 0 0 3px rgba(214, 168, 79, 0.2);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy/70">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
