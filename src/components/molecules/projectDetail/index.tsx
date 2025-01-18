import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import DesktopProjectDetail from "@/components/pages/project/detail/desktop";
import MobileProjectDetail from "@/components/pages/project/detail/mobile";
import { getNextProject, getPrevProject, getProjectDetail } from "@/utils/project";

export const ProjectDetailPage = ({ uid }: { uid: string }) => {
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
            galleries={project?.gallery ? project?.gallery : []}
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
            galleries={project?.gallery ? project?.gallery : []}
            category={String(project?.category)}
            nextProjectUrl={nextProjectUrl}
            prevProjectUrl={prevProjectUrl}
            />
        </MobileView>
        </>
    )
}