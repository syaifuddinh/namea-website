import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopProjectDetail } from "@/components/pages/project/detail/desktop";
import { MobileProjectDetail } from "@/components/pages/project/detail/mobile";
import { getNextProject, getPrevProject, getProjectDetail } from "@/utils/project";

type Props = {
  params: Promise<{ uid: string }>
}

export default async function ProjectDetail({ params }:  Props) {
  const uid = (await params).uid
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