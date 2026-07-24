import type { LogoStyles } from "../_styles";
export type LogoData = {
  imgSrc: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <span className={cn("border-2 border-solid border-accent block relative w-14 h-14 rounded-[50%] shrink-0 overflow-hidden bg-color-010 shadow-[var(--clr-14)_0px_1px_3px_0px] aspect-square", styles.className)}>
      <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc} width="56" />
    </span>
  );
}
