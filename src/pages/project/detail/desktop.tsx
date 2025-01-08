import Link from "next/link";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import { Footer } from "@/components/atoms/footer";
import { Logo } from "@/components/atoms/logo";
import { ArrowRightIcon } from "@/components/atoms/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "@/components/atoms/icons/ArrowLeftIcon";
import { ProjectPageDTO } from "@/types/project";

export const DesktopProjectDetail = ({
  title,
  thumbnail,
  description,
  category,
  year,
  nextProjectUrl,
  prevProjectUrl
}: ProjectPageDTO) => {
  return (
    <div className="fixed w-full h-full">
      <div className="relative bg-gray h-full relative">
        <div className="absolute z-[100] pl-[8.333vw] pt-[38.5]">
          <Logo />
        </div>


        <Link 
          className="bg-gray100 z-10 absolute w-[50px] h-full flex items-center justify-center"
          href={"/projects"}
        >
          <div className="text-dark -rotate-[90deg] uppercase font-medium text-sm tracking-[0.05em] leading-[24.62px]">
          { MENU.projects.title }
          </div>
        </Link>

        <div
          className="absolute pl-[8.333vw] pt-[2.375vw]"
          style={{"width": "calc(100% - 10vw)"}}
        >
            <div className="flex justify-end gap-4">
              <NavButton 
                url={prevProjectUrl} 
                type="prev" 
                isDisabled={prevProjectUrl === "#"} 
              />

              <NavButton 
                url={nextProjectUrl} 
                type="next" 
                isDisabled={nextProjectUrl === "#"} 
              />
            </div>

            <div className="flex gap-8 mt-7">
              <Image 
                src={thumbnail}
                alt="Project main banner"
                width={550}
                height={260}
              />

              <div>
                <div className="font-medium text-sm">
                  { title }
                </div>

                <div className="font-medium text-xs mt-1">
                  { category }
                </div>

                <div className="font-medium text-xs mt-1">
                  { year }
                </div>

                
                <div className="text-[11px] mt-4 max-w-[350px]">
                  { description }
                </div>
              </div>
            </div>

            <div className="mt-10">
                <div className="font-medium">
                  WEBSITE
                </div>

                <div className="grid grid-cols-3 gap-5 mt-5">
                  { [0, 1, 2].map(item => (
                    <div key={item} className="bg-dark h-[235px]"></div>
                  )) }
                </div>
            </div>
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
const NavButton = ({ 
  type = "next",
  isDisabled = false,
  url
}: {
  url: string;
  type: "next" | "prev";
  isDisabled: boolean;
}) => (
  <Link
    className={`${type === "next" && "justify-end"} ${isDisabled ? "bg-gray100 text-gray cursor-not-allowed" : "bg-dark"} text-white text-[10px] font-medium flex items-center h-[40px] w-[150px] gap-1`}
    href={url}
  >
      { type === "prev" && <ArrowLeftIcon className={isDisabled ? "text-gray" : "text-primary"} /> }
      <div>
        { type === "next" ? "NEXT PROJECT" : "PREV PROJECT" }
      </div>
      { type === "next" && <ArrowRightIcon className={isDisabled ? "text-gray" : "text-primary"} /> }
  </Link>
)