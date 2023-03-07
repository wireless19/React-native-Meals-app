import { StyleSheet, View, Text } from 'react-native';

function Subtitle(props) {

    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{props.children}</Text>
        </View>
    )

}
export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitleContainer: {
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6
    }
});