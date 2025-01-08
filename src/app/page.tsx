import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopHome } from "@/components/pages/home/desktop";
import { MobileHome } from "@/components/pages/home/mobile";

export default function Home() {
  return (
    <>
      <DesktopView>
        <DesktopHome />
      </DesktopView>

      <MobileView>
        <MobileHome />
      </MobileView>
    </>
  )
}