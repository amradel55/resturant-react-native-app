import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import  CatogoriesScreen from '../screens/CategoriesScreen';
import  CatogoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const MealsNavigator = createStackNavigator({
    
    Categories: {
        screen: CatogoriesScreen,
        navigationOptions: {
        headerTitle: 'Meal Categories'
        }
    },
    CatogoryMeals: CatogoryMealsScreen,
    MealDetail: MealDetailScreen
},
{
    mode:'card',
    defaultNavigationOptions:{

        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor 
    }
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant-outline" size={24} color={tabInfo.tintColor} />
            },
            
        }
        
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
            }
        }
    }

}

const MealsFavNavigator = Platform.OS === 'android' ?  
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true
    }) :
     createBottomTabNavigator(tabScreenConfig,
{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavNavigator);