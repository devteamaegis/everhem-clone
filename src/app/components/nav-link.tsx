import type { NavLinkStyles } from "../_styles";
export type NavLinkData = {
  href: string;
  label: string;
};
/** A navigation link. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <a className={cn("block text-sm leading-[1.375rem] uppercase cursor-pointer 2xl:hidden", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
