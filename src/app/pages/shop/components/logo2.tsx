import type { Logo2Styles } from "../_styles";
export type Logo2Data = {
  imgSrc: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <span className={cn("border-2 border-solid border-accent block relative rounded-[50%] shrink-0 overflow-hidden bg-color-010 shadow-[var(--clr-14)_0px_1px_3px_0px] aspect-square 2xl:hidden", styles.className)}>
      <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src={d.imgSrc} width="56" />
    </span>
  );
}
