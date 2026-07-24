import type { MediaCardStyles } from "../_styles";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className={cn("grid max-w-350 px-8 items-center gap-16 grid-cols-2 max-md:px-4 max-lg:gap-8 max-lg:grid-cols-1 md:max-lg:px-6", styles.className)}>
      <div className={cn("block overflow-hidden bg-accent aspect-[0.8] max-lg:order-[1]", styles.className2)}>
        <img className="w-full h-180 block max-w-full overflow-clip object-cover aspect-[auto_1200/1500] max-md:h-[26.8125rem] md:max-lg:h-225.5" data-component="image" alt={d.alt} height="1500" src={d.imgSrc} width="1200" />
      </div>
      {" "}
      <div className={cn("flex max-w-[28.86rem] flex-col items-center gap-5 text-center max-lg:order-[2] max-lg:max-w-none", styles.className3)}>
        <h2 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-[2.75rem] leading-[3rem] tracking-[-0.22px] [overflow-wrap:break-word] max-lg:text-3xl max-lg:leading-[2.0625rem] max-lg:tracking-[-0.15px]" data-component="heading">
          {d.title}
        </h2>
        <p className="block text-color-007 font-light leading-[1.625rem] [overflow-wrap:break-word]">
          {d.description}
        </p>
        <a className="h-12 border border-solid border-foreground flex mt-1 py-3.5 px-7 justify-center items-center text-xs font-medium leading-[1.1875rem] tracking-[2.16px] uppercase cursor-pointer" data-component="button" href={d.href}>
          {d.label}
        </a>
      </div>
      {" "}
    </article>
  );
}
