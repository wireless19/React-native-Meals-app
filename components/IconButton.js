import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
function IconButton(props) {
    return (
        <Pressable style={({ pressed }) => (pressed && styles.pressed)} onPress={props.onTap}>
            {/* <Ionicons name="star" size={24} color="white" /> */}
            <Ionicons name={props.icon} size={24} color={props.iconColor} />
        </Pressable>
    )
}
export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})