export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  imgSrc2: string;
  href2: string;
  label: string;
  href3: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="flex flex-col 2xl:hidden">
      <a className="block cursor-pointer 2xl:hidden" data-component="link" aria-hidden="true" href={d.href}>
        <div className="block mb-3 overflow-hidden bg-accent aspect-[0.8] 2xl:hidden">
          <img className="w-full h-120 block max-w-full overflow-clip object-cover aspect-[auto_1200/1500] pointer-events-none max-md:h-[26.8125rem] md:max-lg:h-225.5 2xl:hidden" data-component="image" alt={d.alt} height="1500" src={d.imgSrc} width="1200" />
        </div>
        {" "}
      </a>
      <div className="flex mb-3 flex-wrap items-center gap-1.5 2xl:hidden">
        <button className="h-7.5 border border-solid border-foreground block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/4b85bb2a3fac.jpg" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/93130b979221.jpg" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/2048cc8496c4.jpg" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/571d84e41510.jpg" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/593d46f5a465.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/8043d3620e1e.jpg" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src={d.imgSrc2} width="56" />
        </button>
        <a className="block ml-0.5 text-color-004 text-xs leading-[1.1875rem] whitespace-nowrap cursor-pointer 2xl:hidden" data-component="link" href={d.href2}>
          {d.label}
        </a>
      </div>
      <a className="h-12 block cursor-pointer 2xl:hidden" data-component="link" href={d.href3}>
        <h3 className="block mb-1 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-xl leading-6 [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <p className="block text-color-011 text-sm leading-[1.3125rem] [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
      </a>
      {" "}
    </div>
  );
}
