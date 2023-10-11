import { Link } from "react-router-dom";
import darkImg from "/dark.svg";
import sunImg from "/sun.svg";

function Header({ onToggleDarkMode, darkMode }) {
  return (
    <header
      className={` py-9 px-32 shadow-header-sh flex  justify-between mb-20  ${
        darkMode ? "bg-white" : "bg-dark-el-bg"
      } sma:px-8 sma:mb-10 dark:bg-dark-el-bg`}
    >
      <Link
        to={"/"}
        className=" text-[2.4rem] font-extrabold sma:text-[1.4rem] sma:leading-8"
      >
        Where in the world
      </Link>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={onToggleDarkMode}
      >
        <img
          src={darkMode ? darkImg : sunImg}
          alt="dark icon"
          className="w-8 h-8"
        />
        <p className="font-semibold text-[1.6rem] sma:text-[1.2rem]">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
}

export default Header;
