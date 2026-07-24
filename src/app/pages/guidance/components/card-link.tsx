export type CardLinkData = {
  href: string;
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
  label: string;
};
/** A linked card. */
export default function CardLink({ d }: { d: CardLinkData }) {
  return (
    <a className="flex flex-col bg-background cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      <span className="h-1 block bg-foreground 2xl:hidden" aria-hidden="true" />
      <div className="block overflow-hidden bg-accent aspect-[3/2] max-lg:aspect-video 2xl:hidden">
        <img className="w-full h-64 block max-w-full overflow-clip object-cover aspect-[auto_900/600] max-md:h-48 md:max-lg:h-101.5 2xl:hidden" data-component="image" alt={d.alt} height="600" src={d.imgSrc} width="900" />
      </div>
      {" "}
      <div className="flex p-7 flex-col gap-1 max-lg:p-5 2xl:hidden">
        <h3 className="block font-semibold leading-5 [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        <p className="block text-color-024 text-sm font-light leading-[1.3125rem] [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
        <span className="flex mt-1 items-center gap-1.5 text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase 2xl:hidden">
          {d.label}
          <span className="block 2xl:hidden" aria-hidden="true">
            →
          </span>
          {" "}
        </span>
      </div>
      {" "}
    </a>
  );
}
