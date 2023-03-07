import { useContext } from 'react';
import { StyleSheet, FlatList, Pressable, View, Text, Image, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

// import { FavoritesContext } from '../store/context/favorites-context';
import { removeFavorite } from '../store/redux/favorites';

function FavouritesScreen(props) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    //OR
    //using context api
    // const { favoriteMealIds, removeFavorite } = useContext(FavoritesContext);

    // Using redux
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const favoriteMeals = MEALS.filter((meal) =>
        // favoriteMealsCtx.ids.includes(meal.id)
        favoriteMealIds.includes(meal.id)
    );

    function selectFavMealItemHandler(id) {
        props.navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList data={favoriteMeals} keyExtractor={(item) => item.id} renderItem={(itemData) =>
                <View style={styles.mealItem}>
                    <Pressable
                        android_ripple={{ color: "#ccc" }}
                        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                        onPress={() => selectFavMealItemHandler(itemData.item.id)}
                    >
                        <View style={styles.innerContainer}>
                            <View>
                                <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
                                <Text style={styles.title}>
                                    {itemData.item.title}
                                </Text>
                            </View>
                            <MealDetails duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability} />
                        </View>
                    </Pressable>
                </View>} />
        </View>
    );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    container: {
        flex: 1,
        padding: 16,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
        backgroundColor: "white",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    buttonPressed: {
        opacity: Platform.OS === "ios" ? 0.5 : null
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
});