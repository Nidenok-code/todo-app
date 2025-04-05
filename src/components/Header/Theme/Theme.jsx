import { useEffect } from "react";
import moon from "../../../assets/icons/moon-icon.svg";
import sun from "../../../assets/icons/sun-icon.svg";
import { useState } from "react";

export default function Theme() {
  let [isDark, setDark] = useState(true);

  function changeTheme() {
    setDark(!isDark);
    document.body.classList.toggle("dark");
  }

  return (
    <img
      onClick={changeTheme}
      className="cursor-pointer max-[425px]:w-5"
      src={isDark ? moon : sun}
      alt="change theme"
    />
  );
}
