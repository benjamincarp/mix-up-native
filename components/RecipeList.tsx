import { Recipe } from "../contentful/recipes"
import { Link } from "expo-router";
import ContentCard from './ContentCard';
import { View, Text } from 'react-native';
import { Colors } from "@/constants/theme";

interface HeaderParams {
    title: string,
	recipeList: Recipe[] 
}

export default function RecipeList ({title, recipeList} :HeaderParams){
    return (
        <ContentCard titleText={title}>
            <View> 
                {recipeList.map((recipe, index) => {
                    const name = recipe.name.toString();
                    return (
                        <View key={name} style={{ margin: 10,}}>
                            <Link href={`/drinks/${name}`}>
                                <View style={{alignItems: 'center', width: '100%'}}>
                                <Text 
                                    style={{
                                        color: Colors.dark.text,
                                        fontSize: 14,
                                        textDecorationLine: 'underline',
                                    }}
                                >
                                    {name.toUpperCase()}
                                </Text>
                                <Text
                                    style={{
                                        color: Colors.dark.text,
                                        fontSize: 14,
                                    }}
                                >
                                
                                    {recipe.description}
                                </Text>
                                </View>
                            </Link>
                        </View>
                    )
                })}
            </View>
        </ContentCard>
    )
}
