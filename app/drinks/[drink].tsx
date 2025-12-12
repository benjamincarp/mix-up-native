import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from 'react';

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