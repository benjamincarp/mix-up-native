import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from 'react';
import Header from "@/components/header";
import MainContainer from "@/components/main_container";

export default function Drink() {
  const { drink, extra } = useLocalSearchParams();

    const navigation = useNavigation();
    
     useEffect(() => {
        navigation.setOptions({ title: drink});
      }, [navigation]);

  return (
    <MainContainer
    >
      <Header text={drink.toString()} />
    </MainContainer>
  );
}