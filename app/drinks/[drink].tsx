import ContentCard from "@/components/ContentCard";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { fetchSingleRecipe, Recipe } from "@/contentful/recipes";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import { Colors, Styles } from "@/constants/theme";

export default function Drink() {
  const drink = useLocalSearchParams().drink.toString();

  const navigation = useNavigation();
    
  useEffect(() => {
      navigation.setOptions({title: drink});
  }, [navigation]);

  const [data, setData] = useState<Recipe | undefined>();
  
  useEffect(() => {
    fetchSingleRecipe({name: drink, preview: false}).then((recipe) => {
      setData(()=> recipe ? recipe : undefined);
    });}
  ,[]);

  if (!data) return (
    <MainContainer>
      <Header text={drink} />
    </MainContainer>
  );

  return (
    <MainContainer>
      <ContentCard titleText={data.name}>
        <View style={{ width: '100%'}}>
          <Text className='italic text-sm' style={[Styles.textBase, Styles.textItalic]}>
            Ingredients:
          </Text>
				{/* <ul className='mt-1.5'>
					{recipe.ingredients.map((ingredient,i) => {
						return (<li key={i}>{ingredient}</li>)
					})}
				</ul>
				{parseGarnish(recipe.garnish)}
				<Separator />
				<div>
					<RichText document={recipe.instructions} />
				</div>
				{ await parseTags(recipe.tags)} */}
        </View>
      </ContentCard>
    </MainContainer>
  );
}

// async function parseTags(tags? :string[]){
// 	if (!tags?.length || tags.length<1) return null;

// 	const tagLinks = tags.map(async (tag)=>{
// 		let name = await getTagName(tag)
		
// 		console.log(`tag name ${name}`)
// 		console.log(`tag id ${tag}`)

// 		return (<span key={tag} className=''>
// 				<Link href={`/tag/${encodeURIComponent(tag)}`} className='underline px-1 inline'>{name}</Link>
// 			</span>)
// 	})


// 	return (
// 		<>
// 			<Separator />
// 			<div className='flex flex-row'>
// 				<div className='italic text-sm flex-shrink'>
// 					Explore more like this:
// 				</div>
// 				<div className='flex flex-grow flex-wrap content-end justify-end'>
// 					{tagLinks}
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default RecipePage