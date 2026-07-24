export type ListRowData = {
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" data-component="link" href="/pages/about-us">
        {d.label}
      </a>
    </li>
  );
}
