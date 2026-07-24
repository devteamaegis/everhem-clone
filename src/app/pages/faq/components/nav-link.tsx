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
    <a className={cn("border border-solid block py-2 px-4 text-xs leading-[1.1875rem] tracking-[0.48px] uppercase cursor-pointer max-md:shrink-0", styles.className)} data-component="link" href={d.href}>
      {d.label}
    </a>
  );
}
