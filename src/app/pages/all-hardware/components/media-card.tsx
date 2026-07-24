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
    <div className="flex flex-col">
      <a className="block cursor-pointer" data-component="link" aria-hidden="true" href={d.href}>
        <div className="block relative mb-3 overflow-hidden bg-accent aspect-[0.8]">
          <img className="w-full h-full block max-w-full overflow-clip object-cover aspect-[auto_520/650] max-md:h-full md:max-lg:h-full" data-component="image" alt={d.alt} height="650" src={d.imgSrc} width="520" />
        </div>
        {" "}
      </a>
      <a className="h-[41.1875px] block cursor-pointer" data-component="link" href={d.href2}>
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
