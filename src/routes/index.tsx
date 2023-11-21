import { NavigationContainer } from "@react-navigation/native"
import BottomTabRoutes from "./BottomTabs"
import Routes from "./Stack"

export const RoutesTypes = () => {
    return (
        <NavigationContainer>
            <BottomTabRoutes />
            <Routes />
        </NavigationContainer>
    )
}