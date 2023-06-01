// MVP 1: Detect "Settings" and render associated display
import SettingsDisplay from "./Displays/SettingsDisplay";
import styles from "./display.module.css";

interface MenuDisplayProps {
  display: string;
}

const MenuDisplay = ({ display }: MenuDisplayProps) => {
  return (
    <section className={styles.display}>
      <h3>{display}</h3>
      <SettingsDisplay />
    </section>
  );
};

export default MenuDisplay;
