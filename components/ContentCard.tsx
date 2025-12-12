import { PropsWithChildren } from 'react';
import  Header from './Header';
import { View } from 'react-native';
import { Colors } from '@/constants/theme';

interface Params {
	titleText: string 
}

export default function ContentCard (props: PropsWithChildren<Params>){
    return (
        <View style={{ padding: 5, width: '100%', marginBottom: 25}}>
            <Header text={props.titleText} />
            <View 
                style={{ 
                    marginTop: 10,
                    padding:1,
                    borderColor: Colors.dark.text,
                    borderWidth: 1,
                    borderStyle: "solid",
                 }}>
                <View 
                    style={{
                        padding: 5,
                        borderColor: Colors.dark.text,
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}>
                    {props.children}
                </View> 
            </View>
        </View>   
    );
}