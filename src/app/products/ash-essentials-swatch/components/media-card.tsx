import type { MediaCardStyles } from "../_styles";
export type MediaCardData = {
  href: string;
  alt: string;
  imgSrc: string;
  href2: string;
  title: string;
  description: string;
  description2: string;
  href3: string;
};
/** A card with media + heading. */
function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <article className="flex flex-col max-md:shrink-0 max-md:basis-[270px] 2xl:hidden">
      <div className="block relative mb-3 2xl:hidden">
        <div className="block relative overflow-hidden aspect-[3/4] bg-accent 2xl:hidden">
          <a className={cn("block shrink-0 basis-full cursor-pointer 2xl:hidden", styles.className)} data-component="link" href={d.href}>
            <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_800/1066] 2xl:hidden", styles.className2)} data-component="image" alt={d.alt} height="1066" src={d.imgSrc} width="800" />
            {" "}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 2xl:hidden">
        <h3 className="block mb-0.5 text-sm font-medium leading-[1.125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
          <a className="inline cursor-pointer 2xl:hidden" data-component="link" href={d.href2}>
            {d.title}
          </a>
          {" "}
        </h3>
        <p className="block mb-1 text-color-009 text-xs leading-[1.0625rem] [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
        <p className="block text-sm font-medium leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
          {d.description2}
        </p>
      </div>
      {" "}
      <div className={cn("flex gap-2 max-md:flex-col 2xl:hidden", styles.className3)}>
        <a className="h-9 border border-solid border-color-002 flex py-2 px-1.5 justify-center items-center grow basis-0 text-background text-[0.625rem] font-medium leading-[1rem] tracking-[1.2px] uppercase bg-color-002 cursor-pointer 2xl:hidden" data-component="button" href={d.href3}>
          Shop now
        </a>
        {" "}
      </div>
      {" "}
    </article>
  );
}
