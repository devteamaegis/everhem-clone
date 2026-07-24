export type MediaTileData = {
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d }: { d: MediaTileData }) {
  return (
    <div className="flex relative flex-col items-stretch gap-1 text-left cursor-pointer" data-component="button" aria-label={d.ariaLabel} role="button">
      <img className="w-full h-[9.8125rem] border border-solid border-primary block max-w-full overflow-clip object-cover aspect-square max-md:h-41 md:max-lg:h-42" data-component="image" alt={d.alt} height="400" src={d.imgSrc} width="400" />
      <span className="block text-sm leading-[1.125rem]">
        {d.text}
      </span>
      {" "}
      <button className="block text-color-002 text-xs font-medium leading-3 tracking-[1.44px] uppercase" data-component="button" type="button">
        Add swatch
      </button>
      {" "}
    </div>
  );
}
