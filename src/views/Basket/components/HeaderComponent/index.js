import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";
import { TextComponent } from "../../../../components/TextComponent";
import basket from "../../../../mocks/backet";

import imageHeader from '../../../../../assets/topo.png'

const width = Dimensions.get('screen').width

export function HeaderComponent() {
    return (
        <View>
            <Image source={imageHeader} style={styles.topHeader} />
            <TextComponent stylesProps={styles.title}>{basket.header.title}</TextComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    topHeader: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    },
})