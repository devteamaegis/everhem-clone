export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d }: { d: TextLinkData }) {
  return (
    <a className="h-12 border border-solid border-foreground flex py-3.5 px-6 justify-center items-center text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" data-component="button" href={d.href}>
      {d.label}
    </a>
  );
}
