import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import CameraScreen from "../screens/camera";
import RegisteredPackage from "../screens/registeredPackage";

type StackNavigation = {
  Home: undefined;
  Camera: undefined;
  RegisteredPackage: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{ title: "Reconhecimento de pacote" }} />
        <Stack.Screen 
        name="Camera" 
        component={CameraScreen}
        options={{ title: "" }} />
        <Stack.Screen 
        name="RegisteredPackage"
        component={RegisteredPackage}
        options={{ title: "Registro de pacote" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
