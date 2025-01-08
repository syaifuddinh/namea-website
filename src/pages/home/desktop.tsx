import Link from "next/link";
import { LogoIcon } from "@/components/atoms/icons/LogoIcon";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import { InquiryCTA } from "@/components/atoms/cta/inquiry";
import { Footer } from "@/components/atoms/footer";
import { Logo } from "@/components/atoms/logo";

export const DesktopHome = () => {
  return (
    <div className="fixed w-full h-full">
      <div className="relative bg-gray pb-[4.444vw] h-full relative">
        <Image 
          src="/images/home/splash.png" 
          width={1262.15} 
          height={411.1} 
          alt="Splash image"
          className="rotate-[120deg] absolute top-[6%] left-[12.5vw] max-[1440px]:max-w-[87.649vw] max-w-[72.649vw]"
        />

        <div className="absolute pt-[38.5] pl-[8.333vw]">
          <Logo />
        </div>
        
        <div
          className="absolute top-[28%] left-[14.92%] text-[6.667vw] font-bold leading-[8vw]"
        >
          <div className="relative">
            <div className="tracking-[0.556vw]">
              { HOME.expert }.
            </div>
            <InquiryCTA className="absolute -top-[0.278vw] right-[11.578vw]" />
          </div>
          
          <div className="ml-[14.853vw] tracking-[0.556vw]">
          { HOME.solution }.
          </div>
        </div>
        

        <div className="max-w-[22.917vw] text-[1.111vw] absolute bottom-[4.444vw] ml-[4.861vw]">
          { HOME.description }
        </div>

      </div>

      <FooterHome className="fixed z-10 top-0 right-0 h-full" />
    </div>
  );
}

const FooterHome = ({ className }: { className }) => (
  <div className={`flex items-center ${className}`}>
    <MenuItem
      url={MENU.expertise.url}
      className="bg-dark text-primary"
      style={{"height": "calc(100% - 256px)"}}
    >
      { MENU.expertise.title }
    </MenuItem>
    
    <MenuItem
      url={MENU.projects.url}
      className="bg-gray100"
      style={{"height": "calc(100% - 146px)"}}
    >
      { MENU.projects.title }
    </MenuItem>

    <Footer />
  </div>
  
)

const MenuItem = ({ 
  className, 
  style, 
  children, 
  url
}: { 
  className: string; 
  style: any; 
  children: React.ReactNode;
  url: string;
 }) => (
    <Link
      className={`w-[61px] flex items-center justify-center uppercase ${className}`}
      style={style}
      href={url}
    >
        <div className="-rotate-90 font-medium h-[18px] text-sm tracking-[0.05em]">
          { children }
        </div>
    </Link>
)