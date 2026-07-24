export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <div className="flex flex-col 2xl:hidden">
      <a className="block cursor-pointer 2xl:hidden" data-component="link" aria-hidden="true" href={d.href}>
        <div className="block relative mb-3 overflow-hidden bg-accent aspect-[0.8] 2xl:hidden">
          <img className="w-full h-[30.4375rem] block max-w-full overflow-clip object-cover aspect-[auto_520/650] max-md:h-[26.8125rem] md:max-lg:h-[27.5625rem] 2xl:hidden" data-component="image" alt={d.alt} height="650" src={d.imgSrc} width="520" />
        </div>
        {" "}
      </a>
      <a className="h-[41.1875px] block cursor-pointer 2xl:hidden" data-component="link" href={d.href2}>
        <div className="block 2xl:hidden">
          <h3 className="block mb-0.5 text-sm font-medium leading-[1.125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
            {d.title}
          </h3>
          <p className="block text-color-003 text-sm leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
            {d.description}
          </p>
        </div>
        {" "}
      </a>
      {" "}
    </div>
  );
}
