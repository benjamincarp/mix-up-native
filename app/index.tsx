// import Header from "@/components/Header";
import RecipeList from "@/components/RecipeList";
import MainContainer from "@/components/MainContainer";
import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from 'react';
import { Menu, fetchActiveMenu, Section } from "../contentful/menu";

export default function Index() {

  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false, title: "Home"});
  }, []);

  const [data, setData] = useState<Menu | undefined>();

  useEffect(() => {
    fetchActiveMenu().then((menu) => {
      console.log("Fetched menu:", menu);
      setData(()=> menu ? menu : undefined);
    });}
  ,[]);
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetAllPokemonQuery('');

  // const linkList = data?.sections[0].drinks.map((drink: any) => (
  //   <Link
  //     key={drink}
  //     href={`/drinks/${drink}`} 
  //     style={{
  //       color: "#dedcdc", 
  //       fontSize: 15,
  //       padding: 10, 
  //     }}>
  //       {drink}
  //   </Link>
  // ));
  
  const menu = data?.sections.map((section:Section) => (<RecipeList key={section.id} title={section.name} recipeList={section.drinks} />))

  return (
    <MainContainer>
      {menu}
    </MainContainer>
  );
}
