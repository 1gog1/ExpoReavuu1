import { Dimensions, Platform } from "react-native";

export const isMobileView = (): boolean => {
  const { width } = Dimensions.get("window");

  const isMobilePlatform = Platform.OS === "ios" || Platform.OS === "android";
  const isMobileWeb = Platform.OS === "web" && width < 768;

  return isMobilePlatform || isMobileWeb;
};
