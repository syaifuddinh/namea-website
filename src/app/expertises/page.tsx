import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopExpertise } from "@/components/pages/expertise/desktop";
import { MobileExpertise } from "@/components/pages/expertise/mobile";

export default function Expertise() {
  return (
    <>
      <DesktopView>
        <DesktopExpertise />
      </DesktopView>

      <MobileView>
        <MobileExpertise />
      </MobileView>
    </>
  )
}