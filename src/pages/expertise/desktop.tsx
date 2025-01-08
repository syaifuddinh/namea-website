import Link from "next/link";
import { LogoIcon } from "@/components/atoms/icons/LogoIcon";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import EXPERTISE from "@/contents/expertise.json"
import { Footer } from "@/components/atoms/footer";
import { Logo } from "@/components/atoms/logo";

export const DesktopExpertise = () => {
  return (
    <div className="fixed w-full h-full">
      <div className="relative bg-dark h-full relative">
        <div className="absolute z-[100] pl-[8.333vw] pt-[38.5]">
          <Logo color="white" />
        </div>


        <div className="bg-gray100 absolute w-[50px] h-full flex items-center justify-center">
          <div className="text-dark -rotate-[90deg] uppercase font-medium text-sm tracking-[0.05em] leading-[24.62px]">
            { HOME.about }
          </div>
        </div>

        <div className="left-[50px] bg-transparent absolute w-[7.5vw] h-full flex items-center justify-center">
          <div className="text-primary -rotate-[90deg] uppercase font-medium text-lg tracking-[0.05em] leading-[24.62px]">
            { MENU.expertise.title }
          </div>
        </div>

        <div className="absolute h-full flex items-center left-[11.319vw]">
          <Image
            src="/images/expertise/main.png"
            alt="Expertise main image"
            width={323}
            height={431}
          />
        </div>

        <HighlightCard
          title={EXPERTISE.highlightTitle}
          description={<>
            <div>{ EXPERTISE.highlightDescription }</div>
            <div className="mt-2">{ EXPERTISE.highlightDescription2 }</div>
          </>}
          className="absolute bottom-0 left-[24.444vw]"
        />

        <div className="grid grid-cols-2 gap-4 absolute left-[40.111vw] top-[5.278vw]">
            { EXPERTISE.pros.map(item => (
              <ProsCard 
                key={item.title}
                title={item.title}
                description={item.description}
              />
            )) }
        </div>
      </div>

      <FooterExpertise className="fixed z-10 top-0 right-0 h-full" />
    </div>
  );
}

const FooterExpertise = ({ className }: { className?: string; }) => (
  <div className={`flex items-center ${className}`}>    
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

const HighlightCard = ({ 
  title, 
  description,
  className
}: { 
  title: string; 
  description: string|React.ReactNode;
  className?: string;
}) => (
  <div className={`text-white max-w-[14.444vw] bg-black py-10 px-5 ${className}`}>
    <div className="font-medium">
      { title }
    </div>
    <div className="text-[11px] mt-4">
      { description }
    </div>
  </div>
)


const ProsCard = ({ 
  title, 
  description,
  className
}: { 
  title: string; 
  description: string;
  className?: string;
}) => (
  <div className={`text-white w-[17.361vw] h-[9.111vw] pl-4 pr-3 py-4 bg-black py-10 px-5 ${className}`}>
    <div className="font-medium text-[10px]">
      { title }
    </div>
    <div className="text-[11px] mt-3 leading-[0.917vw]">
      { description }
    </div>
  </div>
)