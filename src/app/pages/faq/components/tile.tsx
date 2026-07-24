export type TileData = {
  text: string;
  description: string;
  href: string;
  description2: string;
  description3: string;
};
/** A content tile. */
export default function Tile({ d }: { d: TileData }) {
  return (
    <details className="border-b border-solid border-b-primary block">
      <summary className="flex py-4.5 px-1 justify-between items-center gap-4 cursor-pointer">
        <span className="block grow basis-0">
          {d.text}
        </span>
        {" "}
        <span className="w-3.5 h-3.5 block relative shrink-0 before:content-[''] before:block before:absolute before:top-1.5 before:bottom-1.5 before:inset-x-0 before:w-3.5 before:h-px before:bg-clr-1 before:transform-[matrix(1,0,0,1,0,-0.5)] before:origin-[7px_0.5px] 2xl:before:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:right-1.5 after:left-1.5 after:w-px after:h-3.5 after:bg-clr-1 after:transform-[matrix(1,0,0,1,-0.5,0)] after:origin-[0.5px_7px] 2xl:after:hidden" aria-hidden="true" />
        {" "}
      </summary>
      {" "}
      <div className="block pb-5.5 px-1 text-color-005 leading-[1.625rem]">
        <p className="block [overflow-wrap:break-word]">
          {d.description}
          <a className="inline text-foreground underline cursor-pointer" data-component="link" href={d.href}>
            {d.description2}
          </a>
          {d.description3}
        </p>
      </div>
      {" "}
    </details>
  );
}
