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
  galleries,
  nextProjectUrl,
  prevProjectUrl
}: ProjectPageDTO) => {
  return (
    <div className="w-full h-full bg-gray">
      <div className="relative h-full relative bg-gray">
        <div className="absolute z-[100] pl-[8.333vw] pt-[38.5]">
          <Logo />
        </div>


        <Link 
          className="bg-gray100 z-10 fixed w-[50px] h-full flex items-center justify-center"
          href={"/projects"}
        >
          <div className="text-dark -rotate-[90deg] uppercase font-medium text-sm tracking-[0.05em] leading-[24.62px]">
          { MENU.projects.title }
          </div>
        </Link>

        <div
          className="pl-[8.333vw] pt-[2.375vw]"
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
                className="max-h-[260px] w-auto"
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

            <div className="mt-10 pb-10 w-full">
                <div className="font-medium">
                  WEBSITE
                </div>

                <div className="mt-5 flex gap-5 w-full overflow-x-auto scrollbar-hide">
                { galleries.map(item => (
                  <div key={item}>
                    <Image
                      key={item}
                      src={item}
                      alt="gallery"
                      className="w-auto min-h-[350px] max-h-[350px] object-cover"
                      quality={100}
                    />
                  </div>
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

export default DesktopProjectDetail;