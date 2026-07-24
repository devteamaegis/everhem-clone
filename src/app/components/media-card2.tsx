import type { MediaCard2Styles } from "../_styles";
export type MediaCard2Data = {
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
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <article className={cn("block absolute top-0 inset-x-0", styles.className)}>
      <img className={cn("w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_2400/900]", styles.className2)} data-component="image" alt={d.alt} height="900" src={d.imgSrc} width="2400" />
      <div className={cn("h-full block absolute top-0 inset-x-0 [background-size:auto,_auto] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box]", styles.className3)} style={{ backgroundImage: "linear-gradient(to top, var(--clr-11), var(--clr-12) 45%, var(--clr-7) 70%), linear-gradient(to right, var(--clr-13), var(--clr-7) 50%)" }} aria-hidden="true" />
      {" "}
      <div className={cn("flex absolute right-168 bottom-0 left-0 max-w-152 py-[3.2rem] px-16 flex-col gap-4 md:max-lg:right-48 md:max-lg:p-8", styles.className4)}>
        <p className={cn("block opacity-85 text-accent text-xs font-medium leading-[1.1875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]", styles.className5)}>
          Designer collaboration
        </p>
        <h2 className={cn("block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-5xl font-light italic leading-[3.125rem] tracking-[-0.48px] [overflow-wrap:break-word]", styles.className6)} data-component="heading">
          {d.title}
        </h2>
        <p className={cn("block opacity-90 max-w-128 text-accent text-sm font-light leading-[1.375rem] [overflow-wrap:break-word]", styles.className7)}>
          {d.description}
        </p>
        <a className={cn("h-[50.9688px] border border-solid border-background flex mt-2 py-4 px-[1.85rem] justify-center items-center self-start text-xs font-medium leading-[1.1875rem] tracking-[2.16px] uppercase cursor-pointer", styles.className8)} data-component="button" href={d.href}>
          {d.label}
        </a>
      </div>
      {" "}
    </article>
  );
}
