import Option from "../types/option";

const options: Option[] = [
  {
    displayContent: "characters",
    id: 1,
    label: "Characters",
    subOptions: []
  },
  {
    displayContent: "artifacts",
    id: 2,
    label: "Artifacts",
    subOptions: [
      { label: "Name 1", displayContent: "name-1" },
      { label: "Name 2", displayContent: "name-2" },
      { label: "Name 3", displayContent: "name-3" }
    ]
  },
  {
    displayContent: "atlas",
    id: 3,
    label: "Atlas",
    subOptions: [
      { label: "Area 1", displayContent: "area-1" },
      { label: "Area 2", displayContent: "area-2" },
      { label: "Area 3", displayContent: "area-3" }
    ]
  },
  {
    displayContent: "settings",
    id: 4,
    label: "Settings",
    subOptions: []
  }
];

export default options;
