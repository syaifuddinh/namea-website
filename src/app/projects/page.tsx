import { DesktopView } from "@/components/atoms/responsive/DesktopView";
import { MobileView } from "@/components/atoms/responsive/MobileView";
import { DesktopProject } from "@/pages/project/desktop";
import { MobileProject } from "@/pages/project/mobile";

export default function Expertise() {
  return (
    <>
      <DesktopView>
        <DesktopProject />
      </DesktopView>

      <MobileView>
        <MobileProject />
      </MobileView>
    </>
  )
}