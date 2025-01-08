import PLATFORM from "@/contents/platform.json"
import { getProjectDetail } from "@/utils/project";
import { Metadata } from "next";

type Props = {
  params: Promise<{ uid: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const uid = (await params).uid
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
