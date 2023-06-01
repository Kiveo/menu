// TODO expand to all known options once we make them.
export type SubDisplay = string;

export const DISPLAY = {
  ARTIFACTS: "artifacts",
  ATLAS: "atlas",
  CHARACTERS: "characters",
  DEFAULT: "default",
  SETTINGS: "settings"
} as const;

// type Display = string;
type Display = typeof DISPLAY[keyof typeof DISPLAY] | SubDisplay;

export default Display;
