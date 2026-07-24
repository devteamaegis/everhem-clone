import type { FeatureCardStyles } from "../_styles";
export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <li className={cn("grid gap-5 grid-cols-[88px_1fr] max-md:gap-2 max-md:grid-cols-1 2xl:hidden", styles.className)}>
      <span className="block text-color-002 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-[2.75rem] italic leading-11 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <div className="flex flex-col gap-2 2xl:hidden">
        <h3 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-[2rem] italic leading-[2.3125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <div className="w-full max-w-[33.3rem] block font-light leading-[1.625rem] 2xl:hidden">
          <p className="block [overflow-wrap:break-word] 2xl:hidden">
            {d.description}
          </p>
        </div>
      </div>
      {" "}
    </li>
  );
}
