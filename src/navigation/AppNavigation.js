import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RestaurantScreen } from "../screens/RestaurantScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Ranking" component={RankingScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}