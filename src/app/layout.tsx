import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";

export const metadata = {
  "title": "Everhem",
  "alternates": {
    "canonical": "https://everhem.com/"
  },
  "openGraph": {
    "title": "Everhem",
    "description": "Everhem",
    "type": "website",
    "siteName": "Everhem",
    "url": "https://everhem.com/"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Everhem",
    "description": "Everhem"
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/2a22d2566d18.webp",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/2fea0a2aba85.webp",
        "sizes": "192x192"
      }
    ],
    "apple": [
      {
        "url": "/assets/cloned/images/d4032c14e554.webp"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


function ListRow({ d }: { d: ListRowData }) {
  return (
    <li className="list-item">
      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}

function Logo({ d }: { d: LogoData }) {
  return (
    <a className="flex opacity-82 justify-center items-center underline cursor-pointer" aria-label={d.ariaLabel} href={d.href} rel="noopener" target="_blank">
      <svg className="w-auto h-5.5 block max-w-full overflow-hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.4">{d.icon}</svg>
      {" "}
    </a>
  );
}

const ListRow_data = [
    { href: "/pages/all-shades", label: "Shades" },
    { href: "/pages/all-drapery", label: "Drapery" },
    { href: "/pages/all-cafe-curtains", label: "Café Curtains" },
    { href: "/pages/all-fixed-curtains", label: "Fixed Curtains" },
    { href: "/pages/all-hardware", label: "Hardware" },
    { href: "/pages/shop", label: "Shop All" }
];

const ListRow_data2 = [
    { href: "/pages/how-it-works", label: "How It Works" },
    { href: "/pages/samples", label: "Order Swatches" },
    { href: "/pages/design-services", label: "Design Services" },
    { href: "/pages/guidance", label: "Everhem Expertise" }
];

const Logo_data = [
    { ariaLabel: "Instagram", href: "https://instagram.com/everhem", icon: <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" />
        </> },
    { ariaLabel: "Pinterest", href: "https://pinterest.com/everhem", icon: <>
        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.2-.1-.7-.1-1.9 0-2.7.1-.7.9-4.8.9-4.8s-.2-.5-.2-1.2c0-1.1.6-1.9 1.4-1.9.7 0 1 .5 1 1.1 0 .7-.4 1.7-.7 2.6-.2.7.4 1.3 1.1 1.3 1.3 0 2.4-1.4 2.4-3.5 0-1.8-1.3-3.1-3.2-3.1-2.2 0-3.5 1.6-3.5 3.3 0 .7.3 1.4.6 1.8.1.1.1.2.1.3l-.2.9c0 .2-.1.2-.3.1-.9-.4-1.5-1.8-1.5-2.9 0-2.3 1.7-4.5 4.9-4.5 2.6 0 4.6 1.8 4.6 4.3 0 2.6-1.6 4.6-3.9 4.6-.8 0-1.5-.4-1.7-.9l-.5 1.8c-.2.7-.6 1.4-1 1.9.8.2 1.6.4 2.4.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </> },
    { ariaLabel: "Facebook", href: "https://facebook.com/everhem", icon: <>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </> }
];

const ListRow_meta: string[][] = [
    ["Ln438", "Ln439"],
    ["Ln440", "Ln441"],
    ["Ln442", "Ln443"],
    ["Ln444", "Ln445"],
    ["Ln446", "Ln447"],
    ["Ln448", "Ln449"]
];

const ListRow_meta2: string[][] = [
    ["Ln453", "Ln454"],
    ["Ln455", "Ln456"],
    ["Ln457", "Ln458"],
    ["Ln459", "Ln460"]
];

const Logo_meta: string[][] = [
    ["Ln484", "Ln485"],
    ["Ln486", "Ln487"],
    ["Ln488", "Ln489"]
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0">
        <a className="w-50 h-px block absolute -z-1 min-w-0 -mt-px overflow-hidden underline cursor-pointer" aria-hidden="true" href="https://accessibe.com/blog/knowledgebase/screen-reader-guide" rel="noopener" target="_blank">
          Accessibility Screen-Reader Guide, Feedback, and Issue Reporting | New window
        </a>
        <section className="grid relative grid-cols-[minmax(20px,1fr)_minmax(0,1400px)_minmax(20px,1fr)] max-md:grid-cols-[1fr_21.005fr_1fr] md:max-lg:grid-cols-[16px_736px_16px]" aria-hidden="true" id="shopify-section-sections--20207707095202__header">
          <div className="h-10 border-b border-solid border-b-primary block fixed inset-x-0 z-101 min-w-0 col-start-2 text-xs leading-[1.1875rem] bg-accent max-lg:h-[37.1875px]">
            <div className="flex relative max-w-350 py-2.5 px-12 justify-center items-center gap-4 mx-auto max-lg:pr-11 max-lg:pl-3.5 max-lg:justify-start">
              <span className="block tracking-[0.48px] max-lg:leading-[1rem] max-lg:text-left">
                {"\n        Free shipping on all product orders\n"}
              </span>
              {" "}
              <button className="w-5.5 h-5.5 flex absolute top-5 right-12 opacity-60 min-w-0 p-1.5 text-[0.8125rem] leading-[0.8125rem] text-center transform-[matrix(1,0,0,1,0,-11)] cursor-pointer max-lg:top-[18.0938px] max-lg:right-3" aria-label="Dismiss announcement" type="button">
                <svg className="w-auto h-2.5 block max-w-full overflow-hidden" aria-hidden="true" fill="none" height="10" viewBox="0 0 10 10" width="10">
                  <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                {" "}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          <header className="h-[71.5938px] border-b border-solid border-b-accent block fixed top-10 inset-x-0 z-100 min-w-0 py-4 px-12 col-start-2 bg-color-014 [backdrop-filter:blur(8px)] pointer-events-none max-lg:h-[4.8125rem] max-lg:top-9 max-lg:px-3.5">
            <div className="h-full grid max-w-350 items-center gap-5 mx-auto grid-cols-[1fr_auto_1fr] max-lg:gap-2 max-md:grid-cols-[44px_231px_56px] md:max-lg:grid-cols-[44px_1fr_auto]">
              <button className="w-full h-11 border border-solid border-clr-0 hidden min-w-0 flex-col justify-center items-center gap-1 text-[0.8125rem] leading-[0.8125rem] text-center cursor-pointer max-lg:flex max-lg:[justify-self:start]" aria-controls="everhem-mobile-nav" aria-expanded="false" aria-label="Open menu" type="button">
                <span className="w-4.5 h-0.5 block bg-foreground" />
                {" "}
                <span className="w-4.5 h-0.5 block bg-foreground" />
                {" "}
                <span className="w-4.5 h-0.5 block bg-foreground" />
                {" "}
              </button>
              {" "}
              <a className="flex items-center [justify-self:start] cursor-pointer max-lg:[justify-self:center]" aria-label="Everhem home" href="/">
                <svg className="w-auto h-6 block max-w-full overflow-hidden max-lg:h-5.5" id="Layer_1" viewBox="0 0 500 116.03" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="currentColor">
                  {"!-- Generator: Adobe Illustrator 30.1.0, SVG Export Plug-In . SVG Version: 2.1.1 Build 136)  -->"}
                  <defs>
                    <style>
                      {".st0 {\n        fill: currentColor;\n      }"}
                    </style>
                  </defs>
                  <path className="st0" d="M38.74,99c-13.33,0-20.93-9.6-20.93-23.86,0-9.07,3.2-16.13,8.27-20.13-4-3.73-6.53-9.47-6.53-17.06,0-12.8,6.93-21.6,19.2-21.6,7.07,0,13.73,1.47,16.4,2v7.73c-3.87-.8-9.2-2-16.4-2-8.4,0-11.07,6.13-11.07,13.86s3.2,13.47,10.13,13.47h14.66v7.73h-14.66c-8,0-11.87,6.8-11.87,16s3.6,16.13,12.8,16.13c7.33,0,13.73-.93,17.73-2v7.73c-4.8,1.07-10.53,2-17.73,2Z" />
                  <g>
                    <path className="st0" d="M95.66,97.67l-20-79.99h8.13l17.06,70.39,17.06-70.39h8.13l-20,79.99h-10.4Z" />
                    <path className="st0" d="M168.32,99c-13.33,0-20.93-9.6-20.93-23.86,0-9.07,3.2-16.13,8.27-20.13-4-3.73-6.53-9.47-6.53-17.06,0-12.8,6.93-21.6,19.2-21.6,7.07,0,13.73,1.47,16.4,2v7.73c-3.87-.8-9.2-2-16.4-2-8.4,0-11.07,6.13-11.07,13.86s3.2,13.47,10.13,13.47h14.66v7.73h-14.66c-8,0-11.87,6.8-11.87,16s3.6,16.13,12.8,16.13c7.33,0,13.73-.93,17.73-2v7.73c-4.8,1.07-10.53,2-17.73,2Z" />
                    <path className="st0" d="M220.98,63.54v34.13h-8V17.68h19.33c14.53,0,21.6,10.27,21.6,22.8,0,9.2-4,17.46-12.13,21.06,6.4,5.73,9.87,14.4,12.93,25.2,1.47,5.33,2.4,6.13,4.93,6.13.93,0,1.87-.27,2.8-.8v5.07c-2.13,1.2-4.4,1.87-6.67,1.87-4.53,0-6.8-3.87-8-7.73-4.27-14-7.47-28.4-21.73-28.4-2.13,0-4,.4-5.07.67ZM220.98,55.54h11.33c10.27,0,13.6-6.8,13.6-15.06s-3.33-15.06-13.6-15.06h-11.33v30.13Z" />
                    <path className="st0" d="M292.97,97.67h-8V17.68h8v34.4h29.2V17.68h8v79.99h-8v-37.86h-29.2v37.86Z" />
                    <path className="st0" d="M380.16,99c-13.33,0-20.93-9.6-20.93-23.86,0-9.07,3.2-16.13,8.27-20.13-4-3.73-6.53-9.47-6.53-17.06,0-12.8,6.93-21.6,19.2-21.6,7.07,0,13.73,1.47,16.4,2v7.73c-3.87-.8-9.2-2-16.4-2-8.4,0-11.07,6.13-11.07,13.86s3.2,13.47,10.13,13.47h14.66v7.73h-14.66c-8,0-11.87,6.8-11.87,16s3.6,16.13,12.8,16.13c7.33,0,13.73-.93,17.73-2v7.73c-4.8,1.07-10.53,2-17.73,2Z" />
                  </g>
                  <path className="st0" d="M474.55,97.67l-5.47-63.46-15.06,46.13h-5.6l-15.06-46.13-5.47,63.46h-7.47l6.93-79.99h7.33l16.53,50.66,16.53-50.66h7.33l6.93,79.99h-7.47Z" />
                </svg>
                {" "}
              </a>
              {" "}
              <nav className="flex items-center [justify-self:center] gap-8 max-lg:hidden" aria-label="Primary">
                <a className="h-[34.5938px] flex py-2 items-center gap-1.5 text-xs leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" href="/pages/jake-arnold-for-everhem">
                  New
                </a>
                <div className="block">
                  <a className="h-[34.5938px] inline-flex py-2 items-center gap-1.5 text-xs leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" href="/pages/shop">
                    {"\n              Shop\n              "}
                    <svg className="w-auto h-1 block opacity-70 max-w-full overflow-hidden" aria-hidden="true" fill="none" height="5" viewBox="0 0 8 5" width="8">
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {" "}
                  </a>
                  {"  "}
                </div>
                <div className="block">
                  <a className="h-[34.5938px] inline-flex py-2 items-center gap-1.5 text-xs leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" href="/pages/guidance">
                    {"\n              Guidance\n              "}
                    <svg className="w-auto h-1 block opacity-70 max-w-full overflow-hidden" aria-hidden="true" fill="none" height="5" viewBox="0 0 8 5" width="8">
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {" "}
                  </a>
                  {"  "}
                </div>
                <a className="h-[34.5938px] flex py-2 items-center gap-1.5 text-xs leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" href="/pages/trade">
                  Trade
                </a>
              </nav>
              {" "}
              <div className="flex items-center [justify-self:end] gap-4 max-lg:gap-3">
                <a className="block py-2.5 px-4.5 text-background text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase whitespace-nowrap bg-color-002 cursor-pointer max-lg:hidden" href="/pages/samples">
                  Order Swatches
                </a>
                {" "}
                <a className="w-6 h-6 flex relative justify-center items-center cursor-pointer max-lg:w-5.5 max-lg:h-5.5" aria-label="Account" href="https://everhem.com/pages/account-dashboard">
                  <svg className="w-auto h-5.5 block max-w-full overflow-hidden" fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {" "}
                </a>
                <a className="w-6 h-6 flex relative justify-center items-center cursor-pointer max-lg:w-5.5 max-lg:h-5.5" aria-label="Cart" href="https://everhem.com/cart">
                  <span className="hidden absolute -top-1.5 -right-2 min-w-3.5 py-0.5 px-1.5 rounded-[999px] text-background text-[0.5625rem] font-medium leading-[0.8125rem] text-center bg-color-002">
                    0
                  </span>
                  {" "}
                  <svg className="w-auto h-5.5 block max-w-full overflow-hidden" fill="none" height="20" stroke="currentColor" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {"   "}
          </header>
          {" "}
        </section>
        {children}
        <section className="grid relative grid-cols-[minmax(20px,1fr)_minmax(0,1400px)_minmax(20px,1fr)] max-md:grid-cols-[1fr_21.005fr_1fr] md:max-lg:grid-cols-[16px_736px_16px]" aria-hidden="true" id="shopify-section-sections--20207707062434__footer">
          <footer className="block col-span-full text-accent bg-foreground">
            <div className="border-b border-solid border-b-color-012 block py-11 px-8 bg-foreground max-lg:py-8 max-md:px-4 md:max-lg:px-6 2xl:py-12">
              <div className="flex max-w-350 flex-col items-center gap-4 text-center mx-auto">
                <h2 className="block text-background [font-family:'Freight_Big_Pro',_'Playfair_Display',_'Times_New_Roman',_Georgia,_serif] text-5xl font-light italic leading-[3.125rem] tracking-[-0.48px] [overflow-wrap:break-word] max-lg:text-[2rem] max-lg:leading-[2.125rem] max-lg:tracking-[-0.32px]">
                  Your windows deserve this.
                </h2>
                <div className="w-[27%] flex mt-2 flex-wrap justify-center gap-4 max-md:w-full max-md:flex-col md:max-lg:w-[45.5%] 2xl:w-[23.5%]">
                  <a className="h-12 border border-solid border-background flex py-3.5 px-7 justify-center items-center text-foreground text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase bg-background cursor-pointer" href="/pages/shop">
                    {"\n            Shop Now\n          "}
                  </a>
                  {" "}
                  <a className="h-12 border border-solid border-border flex py-3.5 px-7 justify-center items-center text-background text-xs font-medium leading-[1.1875rem] tracking-[1.44px] uppercase cursor-pointer" href="/pages/samples">
                    {"\n            Order Swatches\n          "}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            <div className="flex max-w-350 pt-11 pb-8 px-8 flex-col gap-12 mx-auto max-lg:pt-8 max-md:px-4 md:max-lg:px-6 2xl:pt-12">
              <div className="grid gap-8 grid-cols-5 max-md:gap-5 max-md:grid-cols-2 md:max-lg:grid-cols-3">
                <div className="flex flex-col gap-4">
                  <h3 className="block text-background text-xs font-medium leading-[0.875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]">
                    Shop
                  </h3>
                  {" "}
                  <ul className="flex flex-col gap-2 [list-style-type:none]">
                    {ListRow_data.map((d, i) => <ListRow key={i} d={d} />)}
                  </ul>
                  {" "}
                </div>
                {" "}
                <div className="flex flex-col gap-4">
                  <h3 className="block text-background text-xs font-medium leading-[0.875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]">
                    Guidance
                  </h3>
                  {" "}
                  <ul className="flex flex-col gap-2 [list-style-type:none]">
                    {ListRow_data2.map((d, i) => <ListRow key={i} d={d} />)}
                  </ul>
                  {" "}
                </div>
                {" "}
                <div className="flex flex-col gap-4">
                  <h3 className="block text-background text-xs font-medium leading-[0.875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]">
                    Company
                  </h3>
                  {" "}
                  <ul className="flex flex-col gap-2 [list-style-type:none]">
                    <li className="list-item">
                      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" href="/pages/about-us">
                        About Us
                      </a>
                    </li>
                    <li className="list-item">
                      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" href="/pages/trade">
                        Trade Program
                      </a>
                    </li>
                  </ul>
                  {" "}
                </div>
                {" "}
                <div className="flex flex-col gap-4">
                  <h3 className="block text-background text-xs font-medium leading-[0.875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]">
                    Support
                  </h3>
                  {" "}
                  <ul className="flex flex-col gap-2 [list-style-type:none]">
                    <li className="list-item">
                      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" href="/pages/contact">
                        Contact Us
                      </a>
                    </li>
                    <li className="list-item">
                      <a className="inline opacity-82 text-sm font-light leading-[1.375rem] cursor-pointer" href="/pages/faq">
                        FAQs
                      </a>
                    </li>
                  </ul>
                  {" "}
                </div>
                {" "}
                <div className="flex flex-col gap-4">
                  <h3 className="block text-background text-xs font-medium leading-[0.875rem] tracking-[2.16px] uppercase [overflow-wrap:break-word]">
                    Connect
                  </h3>
                  {" "}
                  <form className="flex flex-col gap-2">
                    {"   "}
                    <label className="block opacity-82 text-sm leading-[1.3125rem] cursor-default" htmlFor="FooterEmail">
                      Sign up for new arrivals + offers
                    </label>
                    {" "}
                    <div className="border-b border-solid border-b-color-013 flex">
                      <input className="w-45.5 h-9.5 block py-2 grow basis-0 overflow-clip text-background text-sm leading-[1.375rem] cursor-text max-md:w-36 md:max-lg:w-[11.4375rem] 2xl:w-51.5" id="FooterEmail" name="contact[email]" placeholder="your@email.com" type="email" />
                      {" "}
                      <button className="flex opacity-82 py-1 px-2 justify-center items-center text-[0.8125rem] leading-[0.8125rem] text-center cursor-pointer aspect-[0.955] max-md:aspect-[0.464]" aria-label="Subscribe" type="submit">
                        <svg className="w-auto h-5 block max-w-full overflow-hidden" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 20 20" strokeWidth="1.5">
                          <path d="M4 10h12m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {" "}
                      </button>
                      {" "}
                    </div>
                    {" "}
                  </form>
                  {" "}
                  <div className="flex mt-2 gap-4">
                    {Logo_data.map((d, i) => <Logo key={i} d={d} />)}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="border-t border-solid border-t-color-012 block pt-5 text-center">
                <p className="block opacity-60 text-xs leading-[1.1875rem] tracking-[0.48px] [overflow-wrap:break-word]">
                  {"\n        © 2026 Everhem. All rights reserved.\n      "}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </footer>
          {" "}
        </section>
        <shop-cart-sync class="block [font-family:GTStandard-M,_sans-serif] leading-6" aria-hidden="true" />
        <div className="w-[21.1094px] h-2.5 block absolute -top-[6249.9375rem] -left-[6249.9375rem] min-w-0 text-[0.6875rem] leading-[0.6875rem] whitespace-nowrap">
          Mgy
        </div>
      </body>
    </html>
  );
}
