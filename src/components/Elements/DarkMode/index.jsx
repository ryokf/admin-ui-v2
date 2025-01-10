import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const DarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load dark mode preference on component mount
    useEffect(() => {
        const savedMode = localStorage.getItem("darkmode");
        if (savedMode === "true") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
        }
    }, []);

    // Toggle dark mode and save preference
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("darkmode");
        localStorage.setItem("darkmode", !isDarkMode);
    };

  return (
    <>
        <div className="btn">
            <div className="btn__indicator">
            <button className="btn__icon-container" onClick={handleToggle}>
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
            </button>
            </div>
        </div>
    </>
  );
}

export default DarkMode;