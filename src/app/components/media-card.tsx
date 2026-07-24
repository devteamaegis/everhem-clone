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
    <article className="flex flex-col">
      <div className="block relative mb-3">
        <div className="block relative overflow-hidden aspect-[3/4] bg-accent">
          <a className="block shrink-0 basis-full cursor-pointer aspect-[2/3]" data-component="link" href={d.href}>
            <img className={cn("w-full block max-w-full overflow-clip object-cover aspect-[auto_800/1066] max-md:h-[15.6875rem] md:max-lg:h-[33.0625rem]", styles.className)} data-component="image" alt={d.alt} height="1066" src={d.imgSrc} width="800" />
            {" "}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="block mb-0.5 text-sm font-medium leading-[1.125rem] [overflow-wrap:break-word]" data-component="heading">
          <a className="inline cursor-pointer" data-component="link" href={d.href2}>
            {d.title}
          </a>
          {" "}
        </h3>
        <p className="block mb-1 text-color-015 text-xs leading-[1.0625rem] [overflow-wrap:break-word]">
          {d.description}
        </p>
        <p className="block text-sm font-medium leading-[1.375rem] [overflow-wrap:break-word]">
          {d.description2}
        </p>
      </div>
      {" "}
      <div className={cn("flex gap-2 max-md:flex-col", styles.className2)}>
        <a className="h-9 border border-solid border-color-002 flex py-2 px-1.5 justify-center items-center grow basis-0 text-background text-[0.625rem] font-medium leading-[1rem] tracking-[1.2px] uppercase bg-color-002 cursor-pointer" data-component="button" href={d.href3}>
          Shop now
        </a>
        {" "}
      </div>
      {" "}
    </article>
  );
}
