import { Stack } from "expo-router";
import Header from "./header/header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    />
  );
}
