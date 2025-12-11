import Header from "@/components/header";
import MainContainer from "@/components/main_container";
import { Link } from "expo-router";

export default function Index() {
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
