import React, { useState, useRef, useEffect } from 'react'
import styles from './ListScreenStyles'
import { Text, View, Image, TouchableOpacity, FlatList, Animated, Easing } from 'react-native';
import ListRemoveButton from '../components/ListRemoveButton';

const ListScreen = ({ navigation }) => {

    const listItems = [
        {
            title: "Shopping",
        },
        {
            title: "Shopping",
        }
    ]



    const flatlistRender = ({ item }) => {

        return (
            <View style={[styles.renderItem, styles.borderShadow]}>
                <Text style={styles.renderTextTitle}>{item.title}</Text>
                <View style={styles.renderRemoveItem}>
                    <View style={{ height: "80%", width: 1, backgroundColor: "#c6c6c6", marginRight: 10 }} />

                    <ListRemoveButton />

                </View>
            </View >
        )
    }

    return (
        <>
            <FlatList style={styles.contentContainer}
                data={listItems}
                renderItem={flatlistRender}
                ListEmptyComponent={(() => (
                    <Text style={styles.noListsText}>No lists</Text>
                ))}
            />


            <TouchableOpacity style={[styles.addListButton, styles.borderShadow]}
                onPress={() => {
                    navigation.navigate("AddList")
                }}
            >
                <Image
                    source={require("../icons/light/BlackPlus.png")}
                    style={{ height: 40, width: 40 }}
                />
            </TouchableOpacity>


        </>
    )
}

export default ListScreen