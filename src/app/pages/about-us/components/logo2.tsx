import type { ReactNode } from "react";
export type Logo2Data = {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="flex opacity-82 justify-center items-center underline cursor-pointer" data-component="link" aria-label={d.ariaLabel} href={d.href} rel="noopener" target="_blank">
      <svg className="w-auto h-5.5 block max-w-full overflow-hidden" data-component="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4">{d.icon}</svg>
      {" "}
    </a>
  );
}
