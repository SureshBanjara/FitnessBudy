import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { create } from 'react-test-renderer'

const CommonButton = ({ text, style, onpress }) => {
    return (
        <TouchableOpacity onpress={() => { onpress }}>
            <View style={styles.mainView}>
                <Text style={styles.textStyle}>{text}</Text>
                <Image source={{ uri: 'right_side' }} style={{ width: 24, height: 24 }} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        width: 175,
        height: 45,
        alignSelf: 'center',
        backgroundColor: '#D0FD3E',
        borderRadius: 48,
        padding: 13
    },
    textStyle: {
        color: 'black',
        fontSize:17,
        fontWeight:'600',
        textAlign:'center',
        top:-2
    }


})
export default CommonButton