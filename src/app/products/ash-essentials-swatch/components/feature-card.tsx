import type { FeatureCardStyles } from "../_styles";
export type FeatureCardData = {
  title: string;
  description: string;
  description2: string;
  description3: string;
  description4: string;
};
/** A feature card. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <article className="border border-solid border-primary flex p-5 flex-col shrink-0 basis-[clamp(280px,_32%,_380px)] gap-2 max-md:basis-[85%] md:max-lg:basis-[clamp(260px,_80%,_340px)] 2xl:hidden">
      <p className="block text-color-002 text-sm leading-[1.375rem] tracking-[1.68px] [overflow-wrap:break-word] 2xl:hidden" aria-hidden="true">
        ★ ★ ★ ★ ★
      </p>
      <h3 className="block font-medium leading-[1.125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      <p className="block text-color-008 text-sm leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
        {d.description}
      </p>
      {" "}
      <p className={cn("flex flex-wrap gap-1.5 text-color-010 text-xs leading-[1.1875rem] [overflow-wrap:break-word] 2xl:hidden", styles.className)}>
        <span className="block text-foreground font-medium 2xl:hidden">
          {d.description2}
        </span>
        <span className="block 2xl:hidden" aria-hidden="true">
          ·
        </span>
        {" "}
        <span className="block 2xl:hidden">
          {d.description3}
        </span>
        <span className="block 2xl:hidden" aria-hidden="true">
          ·
        </span>
        {" "}
        <span className="block 2xl:hidden">
          {d.description4}
        </span>
      </p>
      {" "}
    </article>
  );
}
