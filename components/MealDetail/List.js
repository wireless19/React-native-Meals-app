import { StyleSheet, View, Text } from 'react-native';

function List(props) {
    return props.data.map((datapoint) => (
        <View key={datapoint} style={styles.listItem}>
            <Text style={styles.itemText}>{datapoint}</Text>
        </View>
    ));
}
export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497"
    },
    itemText: {
        color: "#351401",
        textAlign: "center"
    }
});