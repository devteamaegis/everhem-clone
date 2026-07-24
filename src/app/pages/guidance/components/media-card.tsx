export type MediaCardData = {
  alt: string;
  imgSrc: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d }: { d: MediaCardData }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="block relative overflow-hidden bg-accent aspect-[0.8]">
        <img className="w-full h-[29.1875rem] block max-w-full overflow-clip object-cover aspect-[auto_1200/900] max-lg:h-[26.8125rem]" data-component="image" alt={d.alt} height="900" src={d.imgSrc} width="1200" />
        {" "}
      </div>
      {" "}
      <h3 className="block mt-2 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-[1.9375rem] italic leading-[2.1875rem] tracking-[-0.15px] [overflow-wrap:break-word] max-lg:text-2xl max-lg:leading-[1.75rem] max-lg:tracking-[-0.12px]" data-component="heading">
        {d.title}
      </h3>
      {" "}
      <p className="block text-color-003 text-sm font-light leading-[1.375rem] [overflow-wrap:break-word]">
        {d.description}
      </p>
      {" "}
    </article>
  );
}
