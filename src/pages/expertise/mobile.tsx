import Link from "next/link";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import EXPERTISE from "@/contents/expertise.json"
import { Navigation } from "@/components/atoms/navigation";

export const MobileExpertise = () => {
  return (
    <div className="w-full h-full bg-dark pb-12">
        <Navigation theme="dark" />
        <div className="bg-gray100 h-[40px] flex items-center justify-center font-medium text-sm">
          { HOME.about }
        </div>

        <div className="text-primary uppercase mt-5 text-lg flex items-center justify-center font-medium">
          { MENU.expertise.title }
        </div>

        <Image
          src="/images/expertise/main.png"
          alt="Expertise main image"
          width={225}
          height={300}
          className="mt-5"
        />

        <HighlightCard
          title={EXPERTISE.highlightTitle}
          description={<>
            <div>{ EXPERTISE.highlightDescription }</div>
            <div className="mt-2">{ EXPERTISE.highlightDescription2 }</div>
          </>}
          className="absolute top-[57.067vw] right-0"
        />

        <div className="flex flex-col gap-3 px-3 mt-[10.25rem]">
            { EXPERTISE.pros.map(item => (
              <ProsCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            )) }
        </div>


        <div className="w-full fixed bottom-0">
          <div className="flex flex-col items-center">
            
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
  style: any; 
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

const HighlightCard = ({ 
  title, 
  description,
  className
}: { 
  title: string; 
  description: string;
  className?: string;
}) => (
  <div className={`text-white w-[70.12%] bg-black py-5 px-4 ${className}`}>
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
  description 
}: { 
  title: string; 
  description: string; 
}) => (
  <div className="bg-black text-white flex gap-6 py-3 px-4">
    <div className="font-medium text-[10px] min-w-[83px] max-w-[83px]">
      { title }
    </div>

    <div className="text-[11px]">
      { description }
    </div>
  </div>
)