import Display from "./display";

export interface SubOption {
  label: string;
  displayContent: Display;
}

export default interface Option {
  displayContent: Display;
  id: number;
  label: string;
  subOptions: SubOption[];
}
