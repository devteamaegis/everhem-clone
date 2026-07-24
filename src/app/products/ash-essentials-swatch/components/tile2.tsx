import type { Tile2Styles } from "../_styles";
export type Tile2Data = {
  text: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <label className="block cursor-pointer 2xl:hidden">
      {" "}
      <span className={cn("border border-solid inline-block py-2.5 px-4.5 text-xs leading-[1.1875rem] tracking-[0.48px] 2xl:hidden", styles.className)}>
        {d.text}
      </span>
      {" "}
    </label>
  );
}
