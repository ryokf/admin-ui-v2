import { useContext, useEffect, useState } from "react";
import Input from "../Elements/LabeledInput/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ThemeContext } from "../../context/themeContext";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    // Save name to local storage
    if (name) {
      localStorage.setItem("userName", name);
    }
  }, [name]);

  useEffect(() => {
    // Retrieve name from local storage
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const date = new Date().toDateString().slice(4);

  return (
    <header className="border-b-2 py-4 px-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">{storedName || name}</div>
        <div className="ms-6 text-gray-03">{date}</div>
      </div>
      <div className="flex">
        <div className="self-center">
          <NotificationsIcon className="text-gray-01 scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
