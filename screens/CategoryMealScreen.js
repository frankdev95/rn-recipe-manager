import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { categories, meals } from "../controller/data";
import MealDetailScreen from "./MealDetailScreen";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('catId');
    const category = categories.find(cat => cat.id === catId);
    let filteredMeals = [];

    for(let i = 0; i < meals.length; i++) {
        for(let j = 0; j < meals[i].categoryIds.length; j++) {
            if(meals[i].categoryIds[j] === catId) {
                filteredMeals.push(meals[i]);
                break;
            }
        }
    }

    return (      
        <View style={styles.screen}>
    
        </View>
    )
}

CategoryMealScreen.navigationOptions = navData => {
    const category = categories.find(cat => navData.navigation.getParam('catId') === cat.id);

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default CategoryMealScreen;