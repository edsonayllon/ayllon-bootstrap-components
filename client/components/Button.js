import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    Animated,
    Easing
} from 'react-native'

export default function Button(props) {
    const springValue = new Animated.Value(1);

    const spring = () => {
        springValue.setValue(0.98);
        Animated.timing(
            springValue,
            {
                toValue: 1,
                duration: 90,
                easing: Easing.quad
            }
        ).start();
    }

    const handlePress = function() {
        spring();
        props.onPress;
    }


    return (
        <TouchableOpacity onPress={handlePress}>
            <Animated.View style={{
                flexDirection: 'row',
                borderRadius: 4,
                borderWidth: 2,
                borderColor: '#e0c56e',
                padding: 12,
                justifyContent: 'center',
                backgroundColor: '#fff',
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                transform: [{ scale: springValue }],
                margin: 10
            }}>
                {
                    props.isLoading ? (
                        <View style={styles.activityIndicator}>
                            <ActivityIndicator color={'#e0c56e'} />
                        </View>
                    ) :  ( 
                        <Text style={styles.buttonText}>
                            { (props.title || "").toUpperCase() }
                        </Text>
                    )
                }
            </Animated.View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    buttonText: {
        color: '#e0c56e',
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: 2,
    },
     activityIndicator: {
        transform: [{ scale: 0.80 }],
    },
});
