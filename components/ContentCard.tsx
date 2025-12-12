import { PropsWithChildren } from 'react';
import  Header from '@/components/Header';
import { View } from 'react-native';

interface Params {
	titleText: string 
}

export default function ContentCard (props: PropsWithChildren<Params>){
    return (
        <View className='p-5'>
            <Header text={props.titleText} />
            {/* <View className='flex flex-row justify-center'>
                <View className='p-6 border-2 border-double flex-grow max-w-3xl'>
                    {props.children}
                </View> 
            </View>*/}
        </View>
        
    )
}