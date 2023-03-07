import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';

// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

//using nested navigators
function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    sceneContainerStyle: { backgroundColor: "#3f2f25" },
    drawerContentStyle: { backgroundColor: "#351401" },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
      }} />
    <Drawer.Screen name="Favourites" component={FavouritesScreen}
      options={{
        drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
            animation: 'slide_from_right'
          }}>
            <Stack.Screen
              name="MealsCategories"
              // component={CategoriesScreen}
              //using nested navigators
              component={DrawerNavigator}
              options={{
                //we comment out the title key because the header won't be shown
                // title: "All Categories",
                //removing the header 
                headerShown: false,

              }} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            //getting the header name dynamically
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: "About the Meal" }}
            //adding button to screen header
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me!" onPress={} />
            //   }
            // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
