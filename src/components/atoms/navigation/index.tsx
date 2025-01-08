"use client"

import { createPortal } from "react-dom";
import { DiamondIcon } from "../icons/DiamondIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { Footer } from "../footer";
import { useState, useEffect } from "react";
import { ClosingIcon } from "../icons/ClosingIcon";
import { Logo } from "../logo";

export const Navigation = ({ 
  theme = "light"
}: { 
  theme?: "light" | "dark";
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  return (
    <div
      className={`pt-4 pb-3 px-4 flex justify-between relative z-10 ${theme === "dark" && "bg-dark"}`}
    >
          <Logo color={theme === "dark" ? "white" : "#212121"} />
  
          <DropdownButton
            theme={theme}
            onClick={() => { setIsVisible(true) }}
          />
          { isVisible && <DropdownMenu onClose={() => { setIsVisible(false) }} /> }
      </div>
  ) 
}

const DropdownButton = ({ 
  onClick,
  theme = "light"
}: { 
  onClick: () => void;
  theme: "light" | "dark";
 }) => (
  <div
    className="cursor-pointer flex items-center gap-1.5"
    onClick={onClick}
  >
      <div className={`text-[10px] font-medium ${theme === "dark" && "text-white"}`}>
        MENU
      </div>

      <DiamondIcon className="text-primary" />
    </div>
)

const DropdownMenu = ({
  onClose
}: {
  onClose: () => void;
}) => {
  const [position, setPosition] = useState<string>("-58%");
  const [opacity, setOpacity] = useState<string>("0");

  useEffect(() => {
    setTimeout(() => {
      setPosition("0");
      setOpacity("0.6");
    }, 1)
  }, [setPosition, setOpacity])
  
  return (
    <>
      { createPortal(
        <>
          <div
            className="fixed top-0 left-0 h-full w-full bg-black z-40"
            style={{"transition": "opacity .9s", "opacity": opacity}}
          ></div>
          <div
            className="w-[58%] fixed top-0 h-full z-50"
            style={{"transition": "right .5s", "right": position}}
          >
              <Footer
                head={<ClosingButton onClick={onClose} />}
                width="100%"
              />
          </div>
        </>, window.document.body
      ) }
    </>
  )
}

const ClosingButton = ({
  onClick
}: {
  onClick: () => void;
}) => (
  <div
    className="flex gap-3 items-center text-primary text-[10px] cursor-pointer absolute top-[61px]"
    onClick={onClick}
  >
    <div>
      CLOSE
    </div>

    <ClosingIcon />
  </div>
)