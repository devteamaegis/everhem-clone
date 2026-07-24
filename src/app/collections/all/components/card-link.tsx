import type { CardLinkStyles } from "../_styles";
export type CardLinkData = {
  alt: string;
  imgSrc: string;
  title: string;
};
/** A linked card. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function CardLink({ d, styles }: { d: CardLinkData; styles: CardLinkStyles }) {
  return (
    <a className={cn("block relative overflow-hidden cursor-pointer aspect-[4/3] 2xl:hidden", styles.className)} data-component="link" href="https://everhem.com/pages/shop-by-room">
      <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_640/480] 2xl:hidden" data-component="image" alt={d.alt} height="480" src={d.imgSrc} width="640" />
      <div className="h-full block absolute top-0 inset-x-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(to top, var(--clr-6), var(--clr-7), var(--clr-8))" }} />
      {" "}
      <h3 className={cn("block absolute bottom-0 inset-x-0 text-background [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] font-light italic [overflow-wrap:break-word] 2xl:hidden", styles.className2)} data-component="heading">
        {d.title}
      </h3>
      {" "}
    </a>
  );
}
