import { PropsWithChildren } from 'react';
import  Header from './Header';
import { View } from 'react-native';
import { Styles } from '@/constants/theme';

interface Params {
	titleText: string 
}

export default function ContentCard (props: PropsWithChildren<Params>){
    return (
        <View style={{ padding: 5, width: '100%', marginBottom: 2}}>
            <Header text={props.titleText} />
            <View 
                style={[Styles.borderThin, { 
                    marginTop: 10,
                    padding:1,
                    width: '100%',
                 }]}>
                <View 
                    style={[Styles.borderThin, {
                        padding: 5,
                        alignItems: 'center',
                        width: '100%',
                    }]}>
                    {props.children}
                </View> 
            </View>
        </View>   
    );
}