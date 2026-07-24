export type MediaCardData = {
  alt: string;
  imgSrc: string;
  text: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <article className="flex flex-col">
      <div className="block mb-7 overflow-hidden bg-background aspect-[3/4] max-lg:mb-5 max-lg:aspect-[4/3]">
        <img className="w-full h-[30.9375rem] block max-w-full overflow-clip object-cover aspect-[auto_900/1200] max-md:h-64 md:max-lg:h-[33.8125rem]" data-component="image" alt={d.alt} height="1200" src={d.imgSrc} width="900" />
      </div>
      {" "}
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-4">
          <span className="block shrink-0 text-color-002 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] leading-4 tracking-[0.64px]">
            {d.text}
          </span>
          <h3 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-[1.625rem] leading-[1.9375rem] tracking-[-0.13px] [overflow-wrap:break-word] max-lg:text-xl max-lg:leading-6 max-lg:tracking-[-0.1px]" data-component="heading">
            {d.title}
          </h3>
        </div>
        <p className="block text-color-003 text-sm font-light leading-[1.4375rem] [overflow-wrap:break-word]">
          {d.description}
        </p>
      </div>
      {" "}
    </article>
  );
}
