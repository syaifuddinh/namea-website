import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopHome } from "@/pages/home/desktop";
import { MobileHome } from "@/pages/home/mobile";

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