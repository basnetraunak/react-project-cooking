import { useState } from "react";
export default function Toggle() {
  const [isTheme, setTheme] = useState(true);
  function toggleTheme() {
    //to make it understand isTheme is using previous value before the button is clicked.
    if (isTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setTheme(!isTheme);
  }
  return (
    <>
      <button onClick={toggleTheme} className="theme-switcher">
        <img
          src={
            isTheme
              ? "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/light.svg"
              : "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813039/react-tutorial/superm-v2/dark.svg"
          }
          width="24"
          height="24"
          alt={isTheme ? "Light theme" : "Dark theme"}
        />
      </button>
    </>
  );
}
