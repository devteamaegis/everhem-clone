export type MediaTileData = {
  alt: string;
  imgSrc: string;
  description: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <button className="flex flex-col items-center shrink-0 text-color-001 text-[0.8125rem] leading-[0.8125rem] text-center cursor-pointer" data-component="button" type="button">
      <img className="w-full h-32 border border-solid border-primary block max-w-full overflow-clip object-cover aspect-[auto_256/256] max-lg:h-24" data-component="image" alt={d.alt} height="256" src={d.imgSrc} width="256" />
      <p className="block text-color-008 text-[0.6875rem] leading-[0.6875rem] [overflow-wrap:break-word]">
        {d.description}
      </p>
      {" "}
    </button>
  );
}
