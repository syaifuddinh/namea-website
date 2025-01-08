import PLATFORM from "@/contents/platform.json"
import { getProjectDetail } from "@/utils/project";

interface GenerateMetadataParams {
  params: {
    uid: string;
  };
}

export async function generateMetadata({ params: { uid } }: GenerateMetadataParams) {
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
