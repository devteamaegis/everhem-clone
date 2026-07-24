import type { MediaTileStyles } from "../_styles";
export type MediaTileData = {
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  text: string;
  ariadisabled?: string;
  disabled?: boolean;
};
/** A media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaTile({ d, styles }: { d: MediaTileData; styles: MediaTileStyles }) {
  return (
    <div className={cn("flex relative flex-col items-stretch gap-1 text-left", styles.className)} data-component="button" aria-label={d.ariaLabel} role="button" aria-disabled={d.ariadisabled}>
      <img className="w-full h-[9.8125rem] border border-solid border-primary block max-w-full overflow-clip object-cover aspect-square max-md:h-41 md:max-lg:h-42" data-component="image" alt={d.alt} height="400" src={d.imgSrc} width="400" />
      <span className="block text-sm leading-[1.125rem]">
        {d.text}
      </span>
      {" "}
      <button className={cn("block text-color-002 text-xs font-medium leading-3 tracking-[1.44px] uppercase", styles.className2)} data-component="button" type="button" disabled={d.disabled}>
        Add swatch
      </button>
      {" "}
    </div>
  );
}
