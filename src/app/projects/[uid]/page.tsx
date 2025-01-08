import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopProjectDetail } from "@/pages/project/detail/desktop";
import { MobileProjectDetail } from "@/pages/project/detail/mobile";
import { getNextProject, getPrevProject, getProjectDetail } from "@/utils/project";

export default function ProjectDetail({ params: { uid } }) {
  const project = getProjectDetail(uid);
  const nextProjectUrl = getNextProject(uid);
  const prevProjectUrl = getPrevProject(uid);
  
  return (
    <>
      <DesktopView>
        <DesktopProjectDetail
          title={project?.title}
          description={project?.description}
          thumbnail={project?.thumbnail}
          year={project?.year}
          category={project?.category}
          nextProjectUrl={nextProjectUrl}
          prevProjectUrl={prevProjectUrl}
        />
      </DesktopView>

      <MobileView>
        <MobileProjectDetail
          title={project?.title}
          description={project?.description}
          thumbnail={project?.thumbnail}
          year={project?.year}
          category={project?.category}
          nextProjectUrl={nextProjectUrl}
          prevProjectUrl={prevProjectUrl}
        />
      </MobileView>
    </>
  )
}