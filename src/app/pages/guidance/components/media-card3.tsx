export type MediaCard3Data = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d }: { d: MediaCard3Data }) {
  return (
    <article className="flex flex-col gap-5 text-center 2xl:hidden">
      <div className="block relative overflow-hidden bg-accent aspect-square 2xl:hidden">
        <img className="w-full h-[23.0625rem] block max-w-full overflow-clip object-cover aspect-[auto_1200/900] max-md:h-[21.4375rem] md:max-lg:h-[44.1875rem] 2xl:hidden" data-component="image" alt={d.alt} height="900" src={d.imgSrc} width="1200" />
        {" "}
      </div>
      {" "}
      <h3 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-2xl italic leading-[1.75rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block max-w-[295.26px] mx-auto text-color-003 text-sm font-light leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
