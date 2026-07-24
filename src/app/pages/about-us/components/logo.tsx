import type { LogoStyles } from "../_styles";
export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function Logo({ d, styles }: { d: LogoData; styles: LogoStyles }) {
  return (
    <li className={cn("flex min-w-0 justify-center items-center grow 2xl:hidden", styles.className)}>
      <img className={cn("block max-w-full max-h-16 overflow-clip object-contain aspect-[auto_320/140] 2xl:hidden", styles.className2)} data-component="image" alt={d.alt} height="140" src={d.imgSrc} width="320" />
    </li>
  );
}
