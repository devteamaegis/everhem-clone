import type { ListRowStyles } from "../_styles";
export type ListRowData = {
  text: string;
};
/** A list row. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className={cn("list-item relative opacity-85 2xl:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
