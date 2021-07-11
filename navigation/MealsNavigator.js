import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'
import  CatogoriesScreen from '../screens/CategoriesScreen';
import  CatogoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

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

export default createAppContainer(MealsNavigator);