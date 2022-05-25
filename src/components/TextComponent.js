import React from 'react';
import { Text, StyleSheet } from 'react-native';

export function TextComponent({children, stylesProps}) {

    const fontType = () => {
        if(!stylesProps?.fontWeight) return styles.fontRegular

        return stylesProps?.fontWeight === 'bold' ? styles.fontBold : styles.fontRegular
    }
    
    return (
        <Text style={[stylesProps, fontType]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    fontRegular: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal',
    },
    fontBold: {
        fontFamily: "MontserratBold",
        fontWeight: 'bold',
    }
})