import { Recipe } from "../contentful/recipes"
import { Link } from "expo-router";
import ContentCard from './ContentCard';
import { View, Text } from 'react-native';
import { Colors, Styles } from "@/constants/theme";

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
                                <View style={{ width: '100%', alignItems: 'center'}}>
                                    <Text style={[Styles.textBase, Styles.textUnderline]}>
                                        {name.toUpperCase()}
                                    </Text>
                                    <Text style={[Styles.textBase, {textAlign: 'center'}]}>
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
