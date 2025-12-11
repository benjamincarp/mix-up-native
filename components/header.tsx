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
          borderColor: "#dedcdc",
          borderWidth: 2
        }}>
        <View
          style={{
            padding: 20, 
            borderStyle: "solid",
            marginTop: -10, 
            marginBottom: -10, 
            borderColor: "#dedcdc",
            borderWidth: 2
          }}>
          <Text
            style={{ 
              color: "#dedcdc", 
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