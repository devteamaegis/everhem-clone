export type Tile3Data = {
  text: string;
  description: string;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <details className="border-b border-solid border-b-primary block 2xl:hidden">
      <summary className="flex py-4 justify-between items-center gap-4 text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer 2xl:hidden">
        <span className="block 2xl:hidden">
          {d.text}
        </span>
        {" "}
        <span className="w-3 h-3 block relative shrink-0 2xl:hidden before:content-[''] before:block before:absolute before:top-1.5 before:bottom-1 before:inset-x-0 before:w-3 before:h-0.5 before:bg-clr-1 before:transform-[matrix(1,0,0,1,0,-0.59375)] before:origin-[6px_0.59375px] 2xl:before:hidden after:content-[''] after:block after:absolute after:inset-y-0 after:right-1 after:left-1.5 after:w-0.5 after:h-3 after:bg-clr-1 after:transform-[matrix(1,0,0,1,-0.59375,0)] after:origin-[0.59375px_6px] 2xl:after:hidden" aria-hidden="true" />
        {" "}
      </summary>
      {" "}
      <div className="block pb-4 text-color-008 text-sm leading-[1.375rem] 2xl:hidden">
        <p className="block [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
      </div>
      {" "}
    </details>
  );
}
