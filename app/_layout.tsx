import { Stack } from "expo-router";
import { Colors } from "../constants/theme";

export default function RootLayout() {
  return (
    // <Provider store={store}>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerTintColor: Colors.dark.text,
        }}
      />
    // </Provider>
  );
}
