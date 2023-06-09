import { useEffect, useState } from "react";
import image from "../../assets/image-avatar.jpg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ThemeToggleBtn } from "../CustomButtons/ThemeToggleBtn";

// TODO: add hover effect for the theme toggle button

export const SideBar = () => {
  const [theme, setTheme] = useState("night");

  const changeTheme = () => {
    setTheme(theme === "night" ? "cupcake" : "night");
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        className={`flex lg:rounded-r-2xl lg:flex-col w-full justify-between lg:h-screen ${
          theme === "night" ? "bg-[#1E2139]" : "bg-[#373B53]"
        } `}
      >
        <div className="flex h-[100%] w-full lg:flex-col justify-between border-[#494E6E] border-r-[1px] lg:border-r-0 lg:border-b-[1px]">
          <div className="lg:w-[100px] lg:h-[103px] md:w-[80px] md:h-[80px] w-[72px] h-[72px] bg-gradient-to-r from-[#603cf2] bg-[#9277FF] rounded-r-2xl flex justify-center items-center">
            <Logo />
          </div>

          <div className="flex justify-center items-center pr-5 lg:pr-0 lg:pb-5">
            <ThemeToggleBtn setTheme={changeTheme} />
          </div>
        </div>
        <div className="lg:py-5 px-5 flex justify-center items-center avatar">
          <div className="w-10 rounded-full">
            <img src={image} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
};
