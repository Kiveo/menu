import { useState } from "react";
import styles from "./menu.module.css";
import MenuSelector from "./MenuSelector";
import MenuDisplay from "./MenuDisplay";
import MenuDetails from "./MenuDetails";
import Display, { DISPLAY } from "../types/display";

const Menu = () => {
  const [display, setDisplayCB] = useState<Display>(DISPLAY.DEFAULT);

  return (
    <main className={styles.menu}>
      <MenuSelector setDisplayCB={setDisplayCB} />
      <MenuDisplay display={display} />
      <MenuDetails />
    </main>
  );
};

export default Menu;
