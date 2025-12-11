import Header from "@/components/header";
import MainContainer from "@/components/main_container";
import { Link, useNavigation } from "expo-router";
import { useEffect } from 'react';
import { useGetAllPokemonQuery } from "@/store/pokemon";

export default function Index() {

  const navigation = useNavigation();
  
   useEffect(() => {
      navigation.setOptions({ headerShown: false, title: "Home"});
    }, [navigation]);

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetAllPokemonQuery('');
  // const drinks = [{name: "Manhattan"}, {name: "Old Fashioned"}];

  const linkList = data?.results ? data?.results.map((drink) => (
    <Link
      key={drink.name}
      href={`/drinks/${drink.name}`} 
      style={{
        color: "#dedcdc", 
        fontSize: 15,
        padding: 10, 
      }}>
        {drink.name}
    </Link>
  )) : null;

  return (
    <MainContainer>
      <Header text="Welcome to Mix Up Native!" />
      {linkList}
    </MainContainer>
  );
}
