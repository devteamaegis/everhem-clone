export type MediaTile2Data = {
  ariaLabel: string;
  alt: string;
  imgSrc: string;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d }: { d: MediaTile2Data }) {
  return (
    <div className="flex relative flex-col items-stretch gap-1 text-left cursor-pointer 2xl:hidden" data-component="button" aria-label={d.ariaLabel} role="button">
      <img className="w-full h-[9.8125rem] border border-solid border-primary block max-w-full overflow-clip object-cover aspect-square max-md:h-41 md:max-lg:h-42 2xl:hidden" data-component="image" alt={d.alt} height="400" src={d.imgSrc} width="400" />
      <span className="block text-sm leading-[1.125rem] 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <button className="block text-color-002 text-xs font-medium leading-3 tracking-[1.44px] uppercase 2xl:hidden" data-component="button" type="button">
        Add swatch
      </button>
      {" "}
    </div>
  );
}
