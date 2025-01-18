import Link from "next/link";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import { InquiryCTA } from "@/components/atoms/cta/inquiry";
import { Navigation } from "@/components/atoms/navigation";

export const MobileHome = () => {
  return (
    <div className="fixed w-full h-full bg-gray">
        <Navigation />

        <div className="flex justify-end mt-[118px] mr-4 relative z-10">
            <InquiryCTA />
        </div>
        
        <div className="mt-3 flex justify-end pr-9 relative z-10">
          <div
            className="text-[11.323vw] font-bold leading-[13.587vw]"
          >
            <div className="tracking-[0.556vw]">
                { HOME.expert }.
            </div>
            
            <div className="ml-[14.853vw] tracking-[0.556vw]">
            { HOME.solution }.
            </div>
          </div>
        </div>

        <img 
          src="/images/home/splash.webp" 
          width={633.92} 
          height={206.48} 
          alt="Splash image"
          className="rotate-[120deg] absolute z-1 top-[32vw] -left-[13vw] max-w-[633.92px]"
        />

        <div className="w-full fixed bottom-0">
          <div className="px-4 text-sm">
            { HOME.description }
          </div>

          <div className="flex flex-col items-center mt-[39px]">
            <MenuItem
              url={MENU.expertise.url}
              className="bg-dark text-primary"
              style={{"width": "calc(100% - 96px)"}}
            >
              { MENU.expertise.title }
            </MenuItem>
            
            <MenuItem
              url={MENU.projects.url}
              className="bg-gray100"
              style={{"width": "calc(100% - 32px)"}}
            >
              { MENU.projects.title }
            </MenuItem>
          </div>
        </div>
    </div>
  );
}


const MenuItem = ({ 
  className, 
  style, 
  children,
  url
 }: { 
  className: string; 
  style: React.CSSProperties; 
  children: React.ReactNode;
  url: string;
}) => (
    <Link
      className={`h-[40px] text-sm font-medium tracking-[0.05em] flex items-center justify-center uppercase ${className}`}
      style={style}
      href={url}
    >
      { children }
    </Link>
)

export default MobileHome