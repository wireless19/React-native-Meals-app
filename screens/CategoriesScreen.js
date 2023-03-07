import { StyleSheet, FlatList, Pressable, View, Text, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen(props) {

    //Note: The navigation props is provided by react navigation
    function pressHandler(id) {
        //navigating from one page to another page
        // props.navigation.navigate('MealsOverview');
        //navigating from one page to another page with param
        props.navigation.navigate('MealsOverview', {
            //categoryId can be changed to any name you want
            categoryId: id
        });
    }

    return (
        <FlatList key={2} data={CATEGORIES} keyExtractor={(item) => item.id} numColumns={2} renderItem={(itemData) =>
            <View style={styles.gridItem}>
                <Pressable
                    android_ripple={{ color: "#ccc" }}
                    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                    onPress={() => pressHandler(itemData.item.id)}>
                    <View style={[styles.innerContainer, { backgroundColor: itemData.item.color }]}>
                        <Text style={styles.title}>
                            {itemData.item.title}
                        </Text>
                    </View>
                </Pressable>
            </View>} />
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
});