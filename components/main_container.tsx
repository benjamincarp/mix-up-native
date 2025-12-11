import { View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'

export type ContainerProps = {
	children?: React.ReactNode 
}

export default function MainContainer({children}: ContainerProps){ 
  return (
     <SafeAreaProvider>
        <SafeAreaView
            style={{
            backgroundColor: "#1a231a",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 30,
        }}>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
  );
}