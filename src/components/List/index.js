import React from 'react'
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { TextComponent } from '../TextComponent'

import { HeaderComponent } from '../../views/Basket/components/HeaderComponent'
import { Details } from '../../views/Basket/components/Details'

import basket from '../../mocks/backet'

export default function List() {
    const renderItem = ({item: {image, name}}) => {
        return (
            <View key={name} style={styles.items}>
                <Image source={image} alt={name} stylesProps={styles.image} />
                <TextComponent stylesProps={styles.name}>{name}</TextComponent>
            </View>
        )
    }
    return (
        <>
            <FlatList
                data={basket.items.list} 
                renderItem={renderItem}
                keyExtractor={({name}) => name}
                ListHeaderComponent={() => {
                    return <>
                        <View>
                            <HeaderComponent />
                            <Details />
                            <TextComponent stylesProps={styles.title}>{basket.items.title}</TextComponent>
                        </View>
                    </>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        marginHorizontal: 16,
        fontSize: 20,
        lineHeight: 32,
    },
    items: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececece',
        alignItems: 'center',
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
})