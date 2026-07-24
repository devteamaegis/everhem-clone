export type LogoData = {
  alt: string;
  imgSrc: string;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="flex flex-col gap-2 cursor-pointer 2xl:hidden" data-component="link" href={"https://everhem.com/pages/woven-woods-oak-matchstick?itemId=&windowName=&selections.mountPosition=inside-mount&selections.customControl=chain-loop&selections.fabric=OAKMS&selections.lining=unlined&selections.cordPosition=right&selections.shadeOperation=back&selections.windowWidth=inside-mount&selections.windowHeight=inside-mount&rulers.mountdepth=2.5&measureStepNum=0"}>
      <div className="h-full block overflow-hidden bg-accent aspect-[3/4] 2xl:hidden">
        <img className="w-full h-[32.6875rem] block max-w-full overflow-clip object-cover aspect-[auto_1200/1200] max-md:h-[28.5625rem] md:max-lg:h-77.5 2xl:hidden" data-component="image" alt={d.alt} height="1200" src={d.imgSrc} width="1200" />
      </div>
    </a>
  );
}
