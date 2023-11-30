import {Text, View, StyleSheet, Pressable} from "react-native";

const GoalItem = ({text, id, onDeleteHandler}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#dddddd'}}
                onPress={() => onDeleteHandler(id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItemText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: 'green',
    },
    goalItemText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5,
    }
});

export default GoalItem;