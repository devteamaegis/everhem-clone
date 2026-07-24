export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  imgSrc2: string;
  imgSrc3: string;
  imgSrc4: string;
  imgSrc5: string;
  imgSrc6: string;
  imgSrc7: string;
  imgSrc8: string;
  href2: string;
  label: string;
  href3: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="flex flex-col shrink-0">
      <a className="block cursor-pointer" data-component="link" aria-hidden="true" href={d.href}>
        <div className="block relative mb-3 overflow-hidden bg-accent aspect-[0.8]">
          <img className="w-full h-full block max-w-full overflow-clip object-cover aspect-[auto_520/650] pointer-events-none max-md:h-full" data-component="image" alt={d.alt} height="650" src={d.imgSrc} width="520" />
        </div>
        {" "}
      </a>
      <div className="flex mb-3 flex-wrap items-center gap-1.5">
        <button className="h-7.5 border border-solid border-foreground block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc2} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc3} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc4} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc5} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc6} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc7} width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56]" data-component="image" alt="" height="56" src={d.imgSrc8} width="56" />
        </button>
        <a className="block ml-0.5 text-color-004 text-xs leading-[1.1875rem] whitespace-nowrap cursor-pointer" data-component="link" href={d.href2}>
          {d.label}
        </a>
      </div>
      <a className="h-[41.1875px] block cursor-pointer" data-component="link" href={d.href3}>
        <div className="block">
          <h3 className="block mb-0.5 text-sm font-medium leading-[1.125rem] [overflow-wrap:break-word]" data-component="heading">
            {d.title}
          </h3>
          <p className="block text-color-003 text-sm leading-[1.375rem] [overflow-wrap:break-word]">
            {d.description}
          </p>
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
