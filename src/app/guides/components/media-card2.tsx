import type { MediaCard2Styles } from "../_styles";
export type MediaCard2Data = {
  alt: string;
  imgSrc: string;
  text: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <article className="border border-solid border-primary flex p-6 flex-col gap-4 bg-background max-lg:p-4 2xl:hidden">
      <div className={cn("block relative overflow-hidden aspect-square 2xl:hidden", styles.className)}>
        <img className="w-full h-57 block max-w-full overflow-clip object-cover aspect-[auto_1200/900] max-md:h-[19.3125rem] md:max-lg:h-[19.4375rem] 2xl:hidden" data-component="image" alt={d.alt} height="900" src={d.imgSrc} width="1200" />
        {" "}
      </div>
      {" "}
      <span className="border border-solid border-primary block py-1.5 px-3 self-start text-[0.6875rem] leading-[1.0625rem] tracking-[1.98px] uppercase 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <h3 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-2xl italic leading-[1.75rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-color-003 text-sm font-light leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
