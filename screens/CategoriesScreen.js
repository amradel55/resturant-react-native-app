import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from "../data/dummy-data";

import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
    // props.navigation.setOptions({title: 'newTitle'})
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CatogoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        )
    }
    return (
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;