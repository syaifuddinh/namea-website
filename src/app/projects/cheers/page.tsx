import { ProjectDetailPage } from "@/components/molecules/projectDetail";

export default async function ProjectDetail() {
  const key = "cheers"
  
  return <ProjectDetailPage uid={key} />
}