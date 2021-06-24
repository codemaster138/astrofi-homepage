export const baseTheme = {
  primary: "#490AFF",
  primary_contrast: "#ffffff",
  primary_tint: "#6d3bff",
  primary_shade: "#3a08cc",

  success: "#2dd36f",
  success_contrast: "#ffffff",
  success_tint: "#42d77d",
  success_shade: "#29be64",

  warning: "#ffc403",
  warning_contrast: "#000000",
  warning_tint: "#ffca22",
  warning_shade: "#e6b008",

  danger: "#eb445a",
  danger_contrast: "#000000",
  danger_tint: "#ed576b",
  danger_shade: "#d43d51",

  dark: "#0d1129",
  dark_contrast: "#ffffff",
  dark_tint: "#000005",
  dark_shade: "#222044",

  medium: "#bbbac8",
  medium_contrast: "#000000",
  medium_tint: "#e2e2ec",
  medium_shade: "#9190a0",

  light: "#ffffff",
  light_contrast: "#000000",
  light_tint: "#ffffff",
  light_shade: "#e5e9f0",
};

export const lightTheme = {
  ...baseTheme,

  background: baseTheme.light,
  background_contrast: "#000000",
  background_tint: baseTheme.light_tint,
  background_shade: baseTheme.light_shade,

  foreground: baseTheme.dark,
  foreground_contrast: "#ffffff",
  foreground_tint: baseTheme.dark_tint,
  foreground_shade: baseTheme.dark_shade,
  foreground_soft: baseTheme.dark_tint,

  name: 'light'
};

export const darkTheme = {
  ...baseTheme,

  background: baseTheme.dark,
  background_contrast: "#ffffff",
  background_tint: baseTheme.dark_tint,
  background_shade: baseTheme.dark_shade,

  foreground: baseTheme.light,
  foreground_contrast: "#000000",
  foreground_tint: baseTheme.light_tint,
  foreground_shade: baseTheme.light_shade,
  foreground_soft: baseTheme.light_shade,

  primary: "#8054ff",
  primary_contrast: "#ffffff",
  primary_tint: "#a485ff",
  primary_shade: "#5b23ff",

  success: "#57dc8c",
  success_contrast: "#ffffff",
  success_tint: "#6ce09a",
  success_shade: "#42d77d",

  warning: "#ffd03a",
  warning_contrast: "#000000",
  warning_tint: "#ffd653",
  warning_shade: "#ffca22",

  danger: "#ef697b",
  danger_contrast: "#000000",
  danger_tint: "#f17c8c",
  danger_shade: "#ed576b",

  name: 'dark'
};

export const getTheme = theme =>
  theme
    ? theme === "dark"
      ? darkTheme
      : lightTheme
    : typeof window !== "undefined"
    ? window.matchMedia("(prefers-color-scheme: dark)")
      ? darkTheme
      : lightTheme
    : lightTheme;
