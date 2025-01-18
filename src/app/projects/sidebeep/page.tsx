import { ProjectDetailPage } from "@/components/molecules/projectDetail";

export default async function ProjectDetail() {
  const key = "sidebeep"
  
  return <ProjectDetailPage uid={key} />
}