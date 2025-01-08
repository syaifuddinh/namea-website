import Link from "next/link";
import Image from "next/image";
import MENU from "@/contents/menu.json"
import { Navigation } from "@/components/atoms/navigation";
import { ProjectPageDTO } from "@/types/project";
import { ArrowLeftIcon } from "@/components/atoms/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/components/atoms/icons/ArrowRightIcon";

export const MobileProjectDetail = ({
  title,
  thumbnail,
  description,
  category,
  year,
  nextProjectUrl,
  prevProjectUrl
}: ProjectPageDTO) => {
  return (
    <div className="w-full min-h-full bg-gray pb-12">
        <Navigation theme="light" />
        <div className="bg-gray100 uppercase h-[40px] flex items-center justify-center font-medium text-sm">
          { MENU.projects.title }
        </div>

        <div className="absolute top-[13px] right-[97px] flex justify-end gap-4">
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
        

        <div className="px-4 pt-5">
            <Image
              src={thumbnail}
              alt={title + " thumbnail"}
              width={400}
              height={260}
            />

            <div className="flex flex-col font-medium gap-1 mt-5">
              <div className="text-sm">{ title }</div>
              <div className="text-[10px]">{ category }</div>
              <div className="text-[10px]">{ year }</div>
            </div>

            <div className="mt-4 text-[11px]">
              { description }
            </div>
        </div>
    </div>
  );
}

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
    className={`${type === "next" && "justify-end"} ${isDisabled ? "bg-gray100 text-gray cursor-not-allowed" : "bg-dark"} text-white text-[10px] font-medium flex items-center h-[30px] w-[30px] gap-1`}
    href={url}
  >
      { type === "prev" && <ArrowLeftIcon className={isDisabled ? "text-gray" : "text-primary"} /> }
      { type === "next" && <ArrowRightIcon className={isDisabled ? "text-gray" : "text-primary"} /> }
  </Link>
)