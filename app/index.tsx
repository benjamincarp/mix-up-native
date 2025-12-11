import Header from "@/components/header";
import MainContainer from "@/components/main_container";
import { Link } from "expo-router";

export default function Index() {
  return (
    <MainContainer>
      <Header text="Welcome to Mix Up Native!" />
      <Link href="/drinks/manhattan" style={{color: "#dedcdc", 
              fontSize: 15 }}>Manhattan</Link>
      <Link href="/drinks/old fashioned"  style={{color: "#dedcdc", 
              fontSize: 15 }}>Old Fashioned</Link>
    </MainContainer>
  );
}
