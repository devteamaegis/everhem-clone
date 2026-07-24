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
    <li className={cn("border-t border-solid border-t-primary list-item py-[1.15rem] leading-6 max-md:py-3.5 md:max-lg:py-4 2xl:hidden", styles.className)}>
      {d.text}
    </li>
  );
}
