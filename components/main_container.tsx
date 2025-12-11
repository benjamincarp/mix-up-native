import { View } from "react-native";

export type ContainerProps = {
	children?: React.ReactNode 
}

export default function MainContainer({children}: ContainerProps){ 
  return (
    <View
      style={{
        backgroundColor: "#1a231a",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 30,
      }}
    >
        {children}
    </View>
  );
}