import "./styles.css";
import Menu from "./Menu/Menu";
import { useState } from "react";
import ThemeContext from "./context/themeContext";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Menu />
      </ThemeContext.Provider>
    </div>
  );
}
