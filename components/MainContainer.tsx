import { ScrollView, View } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import { StyleSheet } from "react-native";

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
            paddingLeft: 5,
            paddingRight: 5,
            width: '100%',
        }}>
          <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
            {children}
          </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1, // Ensures the ScrollView uses all available vertical space
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1, // Ensures content can grow and enables scrolling when needed
    padding: 10,
    width: '100%',
  },
  innerContent: {
    // Add alignment and justification styles here if needed,
    // otherwise they may interfere with the flexGrow: 1 on contentContainer
  }
});