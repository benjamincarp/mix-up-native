import { Stack, useNavigation } from "expo-router";
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a231a',
        },
        headerTintColor: '#dedcdc'
      }}
    />
  );
}
