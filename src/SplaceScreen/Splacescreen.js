import React, { useEffect } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

function SplashScreen(props) {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('StartingScreen');
        }, 3000);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: 'app_logo' }} style={{ width: 117, height: 116 }} />
                <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#D0FD3E' }}>FitnessBudy</Text>
            </View>
        </SafeAreaView>
    );
}
export default SplashScreen