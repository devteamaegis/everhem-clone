export type MediaTileData = {
  alt: string;
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="block shrink-0 2xl:hidden">
      <img className="w-full h-32 border border-solid border-primary block max-w-full overflow-clip object-cover aspect-[auto_256/256] bg-accent max-lg:h-24 2xl:hidden" data-component="image" alt={d.alt} height="256" src={d.imgSrc} width="256" />
      {" "}
      <p className="block text-color-004 text-[0.6875rem] leading-[1.0625rem] text-center [overflow-wrap:break-word] 2xl:hidden">
        {d.description}
      </p>
      {" "}
    </div>
  );
}
