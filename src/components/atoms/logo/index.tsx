import Link from "next/link"
import { LogoIcon } from "../icons/LogoIcon";

export const Logo = ({ 
  color = "#212121" 
}: { 
  color?: string; 
}) => (
  <Link
    href="/"
    title="Buka halaman utama"
  >
    <LogoIcon  color={color} />
  </Link>
)