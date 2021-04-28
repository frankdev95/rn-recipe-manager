import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { categories } from "../controller/data";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = props => {
    const renderGridItem = itemData => <CategoryGridItem title={itemData.item.title} color={itemData.item.color} src={itemData.item.src} onSelect={_ => props.navigation.navigate({routeName: 'CategoryMeals', params: {
        catId: itemData.item.id
    }})}/>
    
    return (
        <FlatList data={categories} renderItem={renderGridItem} numColumns={2} />
    )
}


CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  

})

export default CategoriesScreen;