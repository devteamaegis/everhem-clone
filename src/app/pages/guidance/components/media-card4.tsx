export type MediaCard4Data = {
  alt: string;
  imgSrc: string;
  description: string;
  title: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard4({ d }: { d: MediaCard4Data }) {
  return (
    <article className="border border-solid border-color-006 flex p-6 flex-col gap-4 max-lg:p-4">
      <div className="block relative overflow-hidden bg-color-017 aspect-square">
        <img className="w-full h-[20.1875rem] block max-w-full overflow-clip object-cover aspect-[auto_1200/900] max-md:h-[19.3125rem] md:max-lg:h-[42.0625rem]" data-component="image" alt={d.alt} height="900" src={d.imgSrc} width="1200" />
        {" "}
      </div>
      {" "}
      <p className="block opacity-70 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-sm italic leading-[1.375rem] tracking-[0.56px] [overflow-wrap:break-word]">
        {d.description}
      </p>
      {" "}
      <h4 className="block [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-xl italic leading-[1.4375rem] [overflow-wrap:break-word]" data-component="heading">
        {d.title}
      </h4>
      {" "}
      <p className="block opacity-75 text-color-009 text-sm font-light leading-[1.375rem] [overflow-wrap:break-word]">
        {d.description2}
      </p>
      {" "}
    </article>
  );
}
