import { Recipe } from "../contentful/recipes"
import { Link } from "expo-router";
import ContentCard from './ContentCard';
import { View } from 'react-native';

interface HeaderParams {
    title: string,
	recipeList: Recipe[] 
}

export default function RecipeList ({title, recipeList} :HeaderParams){
    return (
        <ContentCard titleText={title}>
            {/* <View className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipeList.map((recipe, index) => {
                const name = recipe.name.toString();
                return (
                    <View key={name}>
                        {/* {(index>0)? <Separator/> : null} */}
                        {/* <Link href={`/drinks/${name}`} >
                        <View className='text-center'>
                            <View className='underline'>
                            {name.toUpperCase()}
                            </View>
                            {recipe.description}
                        </View>
                        </Link>
                    </View>
                )
            })}
            </View> */} 
        </ContentCard>
    )
}
