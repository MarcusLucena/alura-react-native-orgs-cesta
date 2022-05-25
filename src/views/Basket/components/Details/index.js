import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { TextComponent } from '../../../../components/TextComponent'
import basket from '../../../../mocks/backet'

export function Details() {
    return (
        <View style={styles.basket}>
            <TextComponent stylesProps={styles.name}>{basket.details.name}</TextComponent>
            <View style={styles.farm}>
                <Image source={basket.details.logo} style={styles.farmImage} />
                <TextComponent stylesProps={styles.farmName}>{basket.details.farmName}</TextComponent>
            </View>
            <TextComponent stylesProps={styles.description}>{basket.details.description}</TextComponent>
            <TextComponent stylesProps={styles.price}>R$ {basket.details.price}</TextComponent>
            <TouchableOpacity style={styles.button}>
                <TextComponent stylesProps={styles.buttonText}>
                    {basket.details.button}
                </TextComponent>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    farmImage: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 15,
        fontFamily: "MontserratRegular",
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,

    },
    button: {
        marginTop: 16,
        backgroundColor: '#209f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})