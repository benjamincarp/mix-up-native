import { View } from "react-native";
import Header from "@/components/header";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#1a231a",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header text="Welcome to Mix Up Native!" />
    </View>
  );
}
