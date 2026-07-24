import type { MediaTile2Styles } from "../_styles";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  description: string;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <div className="block shrink-0 2xl:hidden">
      <img className={cn("h-32 border border-solid border-primary block max-w-full overflow-clip object-cover aspect-[auto_256/256] bg-accent max-lg:h-24 2xl:hidden", styles.className)} data-component="image" alt={d.alt} height="256" src={d.imgSrc} width="256" />
      {" "}
      <p className="block text-color-004 text-[0.6875rem] leading-[1.0625rem] text-center [overflow-wrap:break-word] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
