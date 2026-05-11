import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
