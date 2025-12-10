import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#1a231a",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
              fontWeight: "bold" 
            }}
          >
            Section Title
        </Text>
        </View>
      </View>
      
    </View>
  );
}
