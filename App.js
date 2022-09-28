import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Homes";
import Screen_01 from "./src/pages/Screen_01";
import Screen_02 from "./src/pages/Screen_02";
import Screen_03 from "./src/pages/Screen_03";
import Screen_4a from "./src/Lab_04/Screen_4a";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* Lab _03  */}
        {/* <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
        <Stack.Screen name="Screen_03" component={Screen_03} /> */}
        {/* Lab_04 */}
        <Stack.Screen name="Chat" component={Screen_4a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
