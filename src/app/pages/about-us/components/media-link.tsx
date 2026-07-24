import type { MediaLinkStyles } from "../_styles";
export type MediaLinkData = {
  ariaLabel: string;
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaLink({ d, styles }: { d: MediaLinkData; styles: MediaLinkStyles }) {
  return (
    <a className="block relative overflow-hidden text-background cursor-pointer aspect-[3/4]" data-component="link" aria-label={d.ariaLabel} href={d.href}>
      <img className="w-full h-136.5 block max-w-full overflow-clip object-cover aspect-[3/4] bg-accent max-md:h-[29.9375rem] md:max-lg:h-[62.6875rem]" data-component="image" alt={d.alt} height="1200" src={d.imgSrc} width="900" />
      <span className={cn("h-[18.5938px] block absolute bottom-5 left-5 text-xs font-medium leading-[1.1875rem] tracking-[2.16px] uppercase [text-shadow:var(--clr-21)_0px_1px_8px] pointer-events-none", styles.className)}>
        {d.label}
      </span>
    </a>
  );
}
