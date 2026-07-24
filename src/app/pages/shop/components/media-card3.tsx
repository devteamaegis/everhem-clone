export type MediaCard3Data = {
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  href3: string;
  title: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d }: { d: MediaCard3Data }) {
  return (
    <div className="flex flex-col shrink-0 2xl:hidden">
      <a className="block cursor-pointer 2xl:hidden" data-component="link" aria-hidden="true" href={d.href}>
        <div className="block relative mb-3 overflow-hidden bg-accent aspect-[0.8] 2xl:hidden">
          <img className="w-full h-100 block max-w-full overflow-clip object-cover aspect-[auto_520/650] pointer-events-none max-md:h-75 2xl:hidden" data-component="image" alt={d.alt} height="650" src={d.imgSrc} width="520" />
        </div>
        {" "}
      </a>
      <div className="flex mb-3 flex-wrap items-center gap-1.5 2xl:hidden">
        <button className="h-7.5 border border-solid border-foreground block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/e4cc20883ab8.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/ceaad9a29aa3.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/db8c4cbc70b1.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/766c7e76ed35.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/c8d2a872ddae.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/3b3dbbb95273.png" width="56" />
        </button>
        <button className="h-7.5 border border-solid border-primary block p-0.5 shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center bg-background cursor-pointer 2xl:hidden" data-component="button" aria-label="Option" type="button">
          <img className="w-full h-5.5 block max-w-full overflow-clip object-cover aspect-[auto_56/56] 2xl:hidden" data-component="image" alt="" height="56" src="/assets/cloned/images/626c32aecfa4.png" width="56" />
        </button>
        <a className="block ml-0.5 text-color-004 text-xs leading-[1.1875rem] whitespace-nowrap cursor-pointer 2xl:hidden" data-component="link" href={d.href2}>
          +5 more collections
        </a>
      </div>
      <a className="h-[41.1875px] block cursor-pointer 2xl:hidden" data-component="link" href={d.href3}>
        <div className="block 2xl:hidden">
          <h3 className="block mb-0.5 text-sm font-medium leading-[1.125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
            {d.title}
          </h3>
          <p className="block text-color-003 text-sm leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
            From $1,195
          </p>
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
