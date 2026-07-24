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
    <button className={cn("h-7.5 border border-solid block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden", styles.className)} data-component="button" aria-label="Option" type="button">
      <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src={d.imgSrc} width="56" />
    </button>
  );
}
