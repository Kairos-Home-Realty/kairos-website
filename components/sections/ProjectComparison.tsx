import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/constants/site";
import { FadeIn } from "@/components/ui/FadeIn";

const COMPARISON_NAMES = ["Godrej Brooklyn Avenue", "Unnathi", "Sattva Lake Ridge", "Sattva Lago"];

export function ProjectComparison() {
  const projects = COMPARISON_NAMES.map((name) => FEATURED_PROJECTS.find((project) => project.name === name)).filter((project): project is NonNullable<typeof project> => Boolean(project));

  return <section className="section-pad bg-white"><div className="container-xl px-0"><FadeIn className="mx-auto max-w-2xl text-center"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Location &amp; Project Advantages</span><h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Compare the details that matter to you</h2><p className="mt-4 text-sm leading-relaxed text-slate/65">Review each project&apos;s listed location and highlights, then open its page for supplied plans and details.</p></FadeIn><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project) => <FadeIn key={project.name}><article className="flex h-full flex-col rounded-xl2 border border-navy/10 bg-offwhite p-5"><h3 className="font-display text-lg font-semibold text-navy">{project.name}</h3><p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-slate/65"><MapPin size={14} className="mt-0.5 shrink-0 text-gold-dark" />{project.location}</p><ul className="mt-4 flex-1 space-y-2 text-xs leading-relaxed text-slate/65">{project.highlights.slice(0, 2).map((highlight) => <li key={highlight}>• {highlight}</li>)}</ul><Link href={project.detailsPage ?? "/projects"} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-navy hover:text-gold-dark">Project details <ArrowRight size={14} /></Link></article></FadeIn>)}</div></div></section>;
}
