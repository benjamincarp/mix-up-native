import { Colors } from '@/constants/theme';
import { View, Text } from 'react-native';

export type HeaderProps = {
	text: string 
}

export default function Header ({text}: HeaderProps){
    return (
      <View 
        style={{
          margin: 5,
          marginBottom: 10,
          paddingLeft: 5,
          paddingRight: 5,
          borderStyle: "solid",
          borderColor: Colors.dark.text,
          borderWidth: 2
        }}>
        <View
          style={{
            padding: 20, 
            borderStyle: "solid",
            marginTop: -10, 
            marginBottom: -10, 
            borderColor: Colors.dark.text,
            borderWidth: 2
          }}>
          <Text
            style={{ 
              color: Colors.dark.text,
              fontSize: 30, 
              fontWeight: "bold",
              textAlign: "center", 
            }}
          >
            {text.toUpperCase()}
        </Text>
        </View>
      </View>
    );
}