import { useContext } from "react";
import ThemeContext from "../../context/themeContext";

// TODO create context
const SettingsDisplay = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <div>
      <h3>Settings Display</h3>
      <ul>
        <li>
          <label>
            <input onChange={handleTheme} type="checkbox" />
            <span>Toggle Theme (current: {theme})</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SettingsDisplay;
