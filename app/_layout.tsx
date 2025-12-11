import { Stack, useNavigation } from "expo-router";
import { store } from '../store/index'
import { Provider } from 'react-redux'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a231a',
          },
          headerTintColor: '#dedcdc'
        }}
      />
    </Provider>
  );
}
