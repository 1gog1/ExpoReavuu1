import { Stack } from "expo-router";
import { Header } from "../src/components/header/header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    />
  );
}
