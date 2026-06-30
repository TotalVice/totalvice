import { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-8 flex items-end justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-slate-400">
              {subtitle}
            </p>
          )}

        </div>

      </div>

      {children}

    </section>
  );
}