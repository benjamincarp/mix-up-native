import Header from "@/components/header";
import MainContainer from "@/components/main_container";
import { Link, useNavigation } from "expo-router";
import { useEffect } from 'react';

export default function Index() {

  const navigation = useNavigation();
  
   useEffect(() => {
      navigation.setOptions({ headerShown: false, title: "Home"});
    }, [navigation]);

  const drinks = ["Manhattan", "Old Fashioned"];

  const linkList = drinks.map((drink) => (
    <Link
      key={drink}
      href={`/drinks/${drink}`} 
      style={{
        color: "#dedcdc", 
        fontSize: 15,
        padding: 10, 
      }}>
        {drink}
    </Link>
  ));

  return (
    <MainContainer>
      <Header text="Welcome to Mix Up Native!" />
      {linkList}
    </MainContainer>
  );
}
