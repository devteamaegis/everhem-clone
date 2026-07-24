import type { Tile2Styles } from "../_styles";
export type Tile2Data = {
  description: string;
  description2: string;
};
/** A content tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <p className={cn("block [overflow-wrap:break-word] 2xl:hidden", styles.className)}>
      {d.description}
      <a className="inline text-foreground underline cursor-pointer 2xl:hidden" data-component="link" href="mailto:hello@everhem.com">
        hello@everhem.com
      </a>
      {d.description2}
    </p>
  );
}
