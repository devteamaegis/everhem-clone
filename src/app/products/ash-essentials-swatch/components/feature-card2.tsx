export type FeatureCard2Data = {
  text: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard2({ d }: { d: FeatureCard2Data }) {
  return (
    <li className="border-t border-solid border-t-primary grid pt-4 items-start gap-4 grid-cols-[56px_1fr] 2xl:hidden">
      <span className="block text-color-002 [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-2xl font-light italic leading-6 2xl:hidden">
        {d.text}
      </span>
      {" "}
      <div className="block 2xl:hidden">
        <h3 className="block mb-1 font-medium leading-[1.125rem] [overflow-wrap:break-word] 2xl:hidden" data-component="heading">
          {d.title}
        </h3>
        {" "}
        <p className="block text-color-003 text-sm leading-[1.375rem] [overflow-wrap:break-word] 2xl:hidden">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </li>
  );
}
