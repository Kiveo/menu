import Option, { SubOption } from "../types/option";

interface MenuOptionProps {
  className: string;
  onClick: (option: Option | SubOption) => void;
  option: Option | SubOption;
}

const MenuOption = ({ className, onClick, option }: MenuOptionProps) => {
  return (
    <li className={className} onClick={() => onClick(option)}>
      {option.label}
    </li>
  );
};

export default MenuOption;
