import { useLocalSearchParams } from 'expo-router';
import Header from "@/components/header";
import MainContainer from "@/components/main_container";

export default function Drink() {
  const { drink, extra } = useLocalSearchParams();
  return (
    <MainContainer
    >
      <Header text={drink.toString()} />
    </MainContainer>
  );
}