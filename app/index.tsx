import RecipeList from "@/components/RecipeList";
import MainContainer from "@/components/MainContainer";
import { useNavigation } from "expo-router";
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
      setData(()=> menu ? menu : undefined);
    });}
  ,[]);
    
  const menu = data?.sections.map((section:Section) => (<RecipeList key={section.id} title={section.name} recipeList={section.drinks} />))

  return (
    <MainContainer>
      {menu}
    </MainContainer>
  );
}
