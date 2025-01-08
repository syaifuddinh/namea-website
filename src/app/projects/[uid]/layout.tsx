import type { Metadata } from "next";
import PLATFORM from "@/contents/platform.json"

export const metadata: Metadata = {
  title: PLATFORM.companyName + " - Our Projects",
  description: PLATFORM.description,
  openGraph: {
    title: PLATFORM.companyName + " - Our Projects",
    description: PLATFORM.description
  }
};

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
