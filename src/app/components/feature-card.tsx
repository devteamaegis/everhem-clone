import type { FeatureCardStyles } from "../_styles";
export type FeatureCardData = {
  text: string;
  title: string;
  description: string;
  description2: string;
};
/** A feature card. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className={cn("block py-2 px-5 text-center", styles.className)}>
      <span className="block mb-2 text-color-002 text-[2rem] font-medium leading-8">
        {d.text}
      </span>
      {" "}
      <h3 className="block mb-4 text-xs font-medium leading-[0.875rem] tracking-[1.44px] uppercase [overflow-wrap:break-word]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block max-w-88 mx-auto text-sm font-light leading-[1.375rem] [overflow-wrap:break-word]">
        {d.description}
        <br className="inline" />
        {d.description2}
      </p>
      {" "}
    </div>
  );
}
