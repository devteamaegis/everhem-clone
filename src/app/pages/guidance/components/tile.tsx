import type { TileStyles } from "../_styles";
export type TileData = {
  ariaselected: string;
  label: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <button className={cn("block relative py-4 text-xs font-medium leading-3 tracking-[2.16px] text-center uppercase whitespace-nowrap cursor-pointer 2xl:hidden after:content-[''] after:block after:absolute after:top-11 after:-bottom-px after:inset-x-0 after:h-0.5 after:bg-clr-1 2xl:after:hidden", styles.className)} data-component="button" aria-selected={d.ariaselected} role="tab" type="button">
      {d.label}
    </button>
  );
}
