import Link from "next/link";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import { Navigation } from "@/components/atoms/navigation";
import { Achievement } from "@/components/atoms/achievement";
import PROJECT from "@/contents/project.json"

export const MobileProject = () => {
  return (
    <div className="w-full h-full bg-gray pb-12">
        <Navigation theme="dark" />
        <div className="bg-gray100 h-[40px] flex items-center justify-center font-medium text-sm">
          { HOME.about }
        </div>
        <div className="bg-dark text-primary uppercase h-[40px] flex items-center justify-center font-medium text-sm">
          { MENU.expertise.title }
        </div>


        <div className="uppercase mt-5 text-lg flex items-center justify-center font-medium">
          { MENU.projects.title }
        </div>

        <div className="relative flex items-center">
          <Image
            src="/images/project/main.png"
            alt="Expertise main image"
            width={225}
            height={300}
            className="mt-5"
          />
          <Achievement className="absolute z-10 max-[376px]:right-0 min-[376px]:left-[13rem]" />
        </div>

        <Portfolio className="mt-6" />

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


const Portfolio = ({ className = "" }: { className: string; }) => (
  <div 
    className={`flex flex-col gap-4 px-4 pb-2 ${className}`}
  >
    { PROJECT.works.map(item => (
      <Link
        key={item.id} 
        href={"/projects/" + item.id}
      >
        <Image
          src={item.thumbnail}
          alt={item.title + " thumbnail"}
          width={400}
          height={260}
        />

        <div className="flex items-center font-medium justify-between mt-5">
          <div className="text-sm">{ item.title }</div>
          <div className="text-[10px]">{ item.year }</div>
        </div>

        <div className="mt-4 text-[11px]">
          { item.description }
        </div>
      </Link>
    )) }
  </div>
)