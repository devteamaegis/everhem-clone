export type MediaLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  label: string;
};
/** A linked media tile. */
export default function MediaLink({ d }: { d: MediaLinkData }) {
  return (
    <a className="h-105 block shrink-0 cursor-pointer" data-component="link" href={d.href}>
      <div className="block relative overflow-hidden aspect-[2/3] bg-accent">
        <img className="w-full h-full block absolute top-0 left-0 max-w-full overflow-clip object-cover aspect-[auto_560/840]" data-component="image" alt={d.alt} height="840" src={d.imgSrc} width="560" />
        <div className="w-70 h-full block absolute top-0 left-0" style={{ backgroundImage: "linear-gradient(to top, var(--clr-8) 0%, var(--clr-9) 40%, var(--clr-0) 100%)" }} />
        {" "}
        <span className="w-70 h-full flex absolute top-0 left-0 p-4 justify-center items-center text-background text-xl font-medium leading-[1.9375rem] tracking-[2.4px] text-center uppercase">
          {d.label}
        </span>
        {" "}
      </div>
      {" "}
    </a>
  );
}
