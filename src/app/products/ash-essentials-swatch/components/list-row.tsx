export type ListRowData = {
  text: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item 2xl:hidden">
      {d.text}
    </li>
  );
}
