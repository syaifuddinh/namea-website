import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopProjectDetail } from "@/pages/project/detail/desktop";
import { MobileProjectDetail } from "@/pages/project/detail/mobile";
import { getNextProject, getPrevProject, getProjectDetail } from "@/utils/project";

export default function ProjectDetail({ params: { uid } }: { params: { uid: string; } }) {
  const project = getProjectDetail(uid);
  const nextProjectUrl = getNextProject(uid);
  const prevProjectUrl = getPrevProject(uid);
  
  return (
    <>
      <DesktopView>
        <DesktopProjectDetail
          title={String(project?.title)}
          description={String(project?.description)}
          thumbnail={String(project?.thumbnail)}
          year={String(project?.year)}
          category={String(project?.category)}
          nextProjectUrl={nextProjectUrl}
          prevProjectUrl={prevProjectUrl}
        />
      </DesktopView>

      <MobileView>
        <MobileProjectDetail
          title={String(project?.title)}
          description={String(project?.description)}
          thumbnail={String(project?.thumbnail)}
          year={String(project?.year)}
          category={String(project?.category)}
          nextProjectUrl={nextProjectUrl}
          prevProjectUrl={prevProjectUrl}
        />
      </MobileView>
    </>
  )
}