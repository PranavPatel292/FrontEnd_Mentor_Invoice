import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface ThemeToggleBtnProps {
  className: string;
  setTheme: () => void;
  theme: string;
}

export const ThemeToggleBtn = ({
  className,
  setTheme,
  theme,
}: ThemeToggleBtnProps) => {
  const toggleTheme = () => {
    setTheme();
  };

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
