import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text></Text>
      {/* <Link href="/agent-search">Agent Search</Link>
      <Link href="/how-it-works">How it works</Link>
      <Link href="/features">Features</Link> */}
    </View>
  );
}
