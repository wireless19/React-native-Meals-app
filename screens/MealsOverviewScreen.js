import { useLayoutEffect } from 'react';

import { StyleSheet, FlatList, Pressable, View, Text, Image, Platform } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen(props) {

    const catId = props.route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function selectMealItemHandler(id) {
        props.navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    //setting the category name on the header dynamically
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        props.navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, props.navigation])


    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={(itemData) =>
                <View style={styles.mealItem}>
                    <Pressable
                        android_ripple={{ color: "#ccc" }}
                        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                        onPress={() => selectMealItemHandler(itemData.item.id)}
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

export default MealsOverviewScreen;

const styles = StyleSheet.create({
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