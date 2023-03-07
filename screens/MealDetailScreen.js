import { useContext, useLayoutEffect } from 'react';

import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

// import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

function MealDetailScreen(props) {

    // const favoriteMealsCtx = useContext(FavoritesContext);
    // OR
    // Using context api
    // const { favoriteMealIds, addFavorite, removeFavorite } = useContext(FavoritesContext);

    // Using redux
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
    //OR
    //using context api
    // const mealIsFavorite = favoriteMealIds.includes(mealId)

    //using redux
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            //OR
            // using context api
            // removeFavorite(mealId);

            // dispatch(removeFavorite({ id: mealId }));
            dispatch(removeFavorite(mealId));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            //OR
            // using context api
            // addFavorite(mealId);

            // dispatch(addFavorite({ id: mealId }));
            dispatch(addFavorite(mealId));
        }
    }

    //header right star icon
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} iconColor="white" onTap={changeFavoriteStatusHandler} />
            }
        });
    }, [props.navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        margin: 8,
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "80%"
    },
});