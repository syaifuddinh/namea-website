import PLATFORM from "@/contents/platform.json"
import { getProjectDetail } from "@/utils/project";


export async function generateMetadata({ params: { uid } }: { params: { uid: string; } }) {
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
