import bg from "../Assets/bg.jpg";

export const COLORS = {
  PrimaryDark: "#171717",
  SecondaryDark: "#8C8C8C",
  TextColor: "#EDEDED",
  Creator: "#DA0037",
  User: "#1363DF",
  background:"#070A1B",
  GreySubtitle:"#a7a7af",
  YellowTitle:"#FDB600",
};
export const FONTS = {
  Monster: "'Montserrat', sans-serif",
  Carzy: "'Pangolin', cursive",
  Robo: "'Roboto', sans-serif",
  Ubuntu: "'Ubuntu', sans-serif",
};
export const SIZE = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const DEVICE = {
  mobileS: `(max-width: ${SIZE.mobileS})`,
  mobileM: `(max-width: ${SIZE.mobileM})`,
  mobileL: `(max-width: ${SIZE.mobileL})`,
  tablet: `(max-width: ${SIZE.tablet})`,
  laptop: `(max-width: ${SIZE.laptop})`,
  laptopL: `(max-width: ${SIZE.laptopL})`,
  desktop: `(max-width: ${SIZE.desktop})`,
  desktopL: `(max-width: ${SIZE.desktop})`,
};

export const IMAGES = {
  bg,
};
