import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopExpertise } from "@/pages/expertise/desktop";
import { MobileExpertise } from "@/pages/expertise/mobile";

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