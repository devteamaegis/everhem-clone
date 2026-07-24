export type Tile4Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d }: { d: Tile4Data }) {
  return (
    <details className="border-b border-solid border-b-primary block 2xl:hidden">
      <summary className="flex py-4.5 px-1 justify-between items-center gap-4 cursor-pointer 2xl:hidden">
        <span className="block grow basis-0 2xl:hidden">
          {d.text}
        </span>
        {" "}
        <span className="w-3.5 h-3.5 block relative shrink-0 2xl:hidden before:content-[''] before:block before:absolute before:top-1.5 before:bottom-1.5 before:inset-x-0 before:w-3.5 before:h-px before:bg-clr-1 before:transform-[matrix(1,0,0,1,0,-0.5)] before:origin-[7px_0.5px] 2xl:before:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:right-1.5 after:left-1.5 after:w-px after:h-3.5 after:bg-clr-1 after:transform-[matrix(1,0,0,1,-0.5,0)] after:origin-[0.5px_7px] 2xl:after:hidden" aria-hidden="true" />
        {" "}
      </summary>
      {" "}
      <div className="block pb-5.5 px-1 text-color-014 leading-[1.625rem] 2xl:hidden">
        <p className="block [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
      </div>
      {" "}
    </details>
  );
}
