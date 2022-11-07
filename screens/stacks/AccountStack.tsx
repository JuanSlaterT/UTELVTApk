import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Login from "../Login";

const Stack = createNativeStackNavigator();
export const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    animationTypeForReplace: "pop"
                }}
            />
        </Stack.Navigator>
    )
}