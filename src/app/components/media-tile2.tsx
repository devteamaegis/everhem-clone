import type { MediaTile2Styles } from "../_styles";
export type MediaTile2Data = {
  alt: string;
  imgSrc: string;
  description: string;
  disabled?: boolean;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile2({ d, styles }: { d: MediaTile2Data; styles: MediaTile2Styles }) {
  return (
    <button className={cn("flex flex-col items-center shrink-0 text-[0.8125rem] leading-[0.8125rem] text-center", styles.className)} data-component="button" type="button" disabled={d.disabled}>
      <img className={cn("h-32 border border-solid border-primary block max-w-full overflow-clip object-cover aspect-[auto_256/256] max-lg:h-24", styles.className2)} data-component="image" alt={d.alt} height="256" src={d.imgSrc} width="256" />
      <p className="block text-color-008 text-[0.6875rem] leading-[0.6875rem] [overflow-wrap:break-word]">
        {d.description}
      </p>
      {" "}
    </button>
  );
}
