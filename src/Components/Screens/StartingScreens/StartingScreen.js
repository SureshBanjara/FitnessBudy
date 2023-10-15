import React, { useState, useEffect } from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import CommonButton from '../../Common/Button';

function StartingScreen(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['image_1', 'image_2', 'image_3'];
    const text = ['Meet your coach,start your journey', 'Create a workout plan to stay fit', 'Action is the key to all success']

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <View style={{}}>
                <Image
                    source={{ uri: images[currentIndex] }}
                    style={styles.imageStyle}

                />
            </View>
            <View style={styles.viewConatinerStyle}>
                <Text style={styles.TextStyle}>{text[currentIndex]}</Text>
            </View>
            <CommonButton text={'Start Now'} />
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageStyle: {
        width: 417,
        height: 515,
        borderBottomRightRadius: 100
    },
    viewConatinerStyle: {
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 50,
    },
    TextStyle: {
        fontSize: 24,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 32,
        textTransform: "uppercase",
        letterSpacing: 0.75

    }
})
export default StartingScreen