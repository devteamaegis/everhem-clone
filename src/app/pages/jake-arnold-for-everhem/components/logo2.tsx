export type Logo2Data = {
  href: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo2({ d }: { d: Logo2Data }) {
  return (
    <a className="flex flex-col gap-2 cursor-pointer 2xl:hidden" data-component="link" href={d.href}>
      <div className="h-full block overflow-hidden bg-accent aspect-square 2xl:hidden">
        <img className="w-full h-149.5 block max-w-full overflow-clip object-cover aspect-[auto_1200/1200] max-md:h-41.5 md:max-lg:h-[22.1875rem] 2xl:hidden" data-component="image" alt="Jake Arnold collection lifestyle detail" height="1200" src={d.imgSrc} width="1200" />
      </div>
    </a>
  );
}
