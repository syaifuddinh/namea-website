import PLATFORM from "@/contents/platform.json"
import { getProjectDetail } from "@/utils/project";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const uid = "cheers"
  const project = getProjectDetail(uid)
  
  return {
    title: PLATFORM.companyName + " - " + project?.title,
    description: PLATFORM.description,
    openGraph: {
      title: PLATFORM.companyName + " - " + project?.title,
      description: PLATFORM.description
    }
  }
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        { children }
    </>
  );
}
