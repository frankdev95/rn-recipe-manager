import { Platform } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Colors from "../assets/constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white
        },
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 25
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
        headerTitleAlign: 'center'
    }
});

export default createAppContainer(MealsNavigator);