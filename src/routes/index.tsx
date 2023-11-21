import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Search from '../screens/Search';
import Details from '../screens/Details';
import BottomTabRoutes from './BottomTabs';



const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BottomTabRoutes"
                component={BottomTabRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
                options={{ headerShown: false }}
            />
        </Stack.Navigator >
    )
}