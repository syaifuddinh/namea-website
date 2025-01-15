import Link from "next/link";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import HOME from "@/contents/home.json"
import PROJECT from "@/contents/project.json"
import { Footer } from "@/components/atoms/footer";
import { Logo } from "@/components/atoms/logo";
import { Achievement } from "@/components/atoms/achievement";

export const DesktopProject = () => {
  return (
    <div className="fixed w-full h-full">
      <div className="relative bg-gray h-full relative">
        <div className="absolute z-[100] pl-[8.333vw] pt-[38.5px]">
          <Logo />
        </div>


        <div className="bg-gray100 absolute w-[50px] h-full flex items-center justify-center">
          <div className="text-dark -rotate-[90deg] uppercase font-medium text-sm tracking-[0.05em] leading-[24.62px]">
            { HOME.about }
          </div>
        </div>

        <Link 
          href={MENU.expertise.url} 
          className="bg-dark left-[50px] absolute w-[50px] h-full flex items-center justify-center"
        >
          <div className="text-primary -rotate-[90deg] uppercase font-medium text-sm tracking-[0.05em] leading-[24.62px]">
            { MENU.expertise.title }
          </div>
        </Link>


        <div className="left-[100px] bg-transparent absolute w-[7.5vw] h-full flex items-center justify-center">
          <div className="text-dark -rotate-[90deg] uppercase font-medium text-lg tracking-[0.05em] leading-[24.62px]">
            { MENU.projects.title }
          </div>
        </div>

        <div className="flex h-full items-center ml-[14.861vw]">
          <div className="relative flex items-center">
              <Image 
                src={"/images/project/main.png"}
                alt="Project main banner"
                width={323}
                height={431}
              />

              <Achievement className="absolute right-0" />
          </div>

          <Portfolio className="ml-10" />
        </div>
      </div>

      <FooterExpertise className="fixed z-10 top-0 right-0 h-full" />
    </div>
  );
}

const FooterExpertise = ({ className }: { className?: string; }) => (
  <div className={`flex items-center ${className}`}>    
    <Footer />
  </div>
  
)

const Portfolio = ({ className = "" }: { className: string; }) => (
  <div 
    className={`flex gap-8 max-w-[58%] pb-2 h-p[482px] overflow-x-scroll ${className}`}
  >
    { PROJECT.works.map(item => (
      <Link
        key={item.id} 
        href={"/projects/" + item.id}
        className="min-w-[400px] max-w-[400px] overflow-hidden"
      >
        <Image
          src={item.thumbnail}
          alt={item.title + " thumbnail"}
          width={400}
          height={260}
          className="min-h-[260px] max-h-[260px] w-auto"
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

export default DesktopProject;