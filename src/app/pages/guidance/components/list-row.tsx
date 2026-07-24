export type ListRowData = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item 2xl:hidden">
      <a className="block py-5 text-xs font-medium leading-[1.1875rem] tracking-[2.16px] uppercase whitespace-nowrap cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
