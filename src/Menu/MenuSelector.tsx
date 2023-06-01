import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from "react";
import options from "../assets/static/options";
import Option from "../types/option";
import Display, { DISPLAY } from "../types/display";
import MenuOption from "./MenuOption";
import styles from "./selector.module.css";

interface MenuSelectorProps {
  setDisplayCB: Dispatch<SetStateAction<Display>>;
}

const MenuSelector = ({ setDisplayCB }: MenuSelectorProps) => {
  const [selected, setSelected] = useState<Option | null>();
  const [subSelected, setSubSelected] = useState<Partial<Option> | null>();

  // -- HANDLERS --
  const handleSelect = useCallback(
    (option: Option) => {
      if (option.id === selected?.id) {
        setSelected(null);
        setSubSelected(null);
        setDisplayCB(DISPLAY.DEFAULT);
      } else {
        setSelected(option);
        setDisplayCB(option.displayContent);
      }
    },
    [setDisplayCB, selected]
  );

  // handler for sub options
  const handleSubSelect = useCallback(
    (sub: Partial<Option>) => {
      if (sub.label === subSelected?.label && selected) {
        setSubSelected(null);
        setDisplayCB(selected.displayContent);
      } else {
        setSubSelected(sub);
        setDisplayCB(sub?.displayContent!);
      }
    },
    [setDisplayCB, selected, subSelected]
  );

  // -- RENDER LOGIC --
  const renderOptionList = useMemo(() => {
    // if selected, render selected's sub-list below Selected label
    if (selected && selected.subOptions.length) {
      const subOptions = selected.subOptions.map((sub) => {
        const isSelected = subSelected?.label === sub.label;
        const optionClass = isSelected
          ? `${styles.selected} ${styles.option} ${styles.sub}`
          : `${styles.option} ${styles.sub}`;

        return (
          <MenuOption
            className={optionClass}
            onClick={() => handleSubSelect(sub)}
            key={sub.label}
            option={sub}
          />
        );
      });
      // create and add top label
      return [
        <MenuOption
          className={`${styles.subHeading} ${styles.option} ${styles.selected}`}
          onClick={() => handleSelect(selected)}
          key={selected.id}
          option={selected}
        />,
        ...subOptions
      ];
    }

    // Default rendering list
    return options.map((el) => {
      const isSelected = selected?.id === el.id;
      const optionClass = isSelected
        ? `${styles.selected} ${styles.option}`
        : styles.option;

      return (
        <MenuOption
          className={optionClass}
          onClick={() => handleSelect(el)}
          key={el.id}
          option={el}
        />
      );
    });
  }, [handleSelect, handleSubSelect, selected, subSelected]);

  // -- RENDER --
  return <ul className={styles.selector}>{renderOptionList}</ul>;
};

export default MenuSelector;
