import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface ThemeToggleBtnProps {
  className: string;
}

export const ThemeToggleBtn = ({ className }: ThemeToggleBtnProps) => {
  const [theme, setTheme] = useState("cupcake");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "cupcake" : "night");
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button onClick={toggleTheme} className={className}>
        {theme === "cupcake" ? (
          <BsFillMoonFill size={20} color="white" />
        ) : (
          <BsFillSunFill size={20} />
        )}
      </button>
    </>
  );
};
