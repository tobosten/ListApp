import React, { useState, useRef, useEffect } from 'react'
import styles from './ListScreenStyles'
import { Text, View, Image, TouchableOpacity, FlatList, Animated, Easing, Button } from 'react-native';
import ListRemoveButton from '../components/ListRemoveButton';
import { ref, set, update, onValue, remove } from "firebase/database";
import { db } from "../config"




const ListScreen = ({ navigation }) => {
    /* 
        const listItems = [
            {
                title: "Shopping",
            },
            {
                title: "Shopping",
            }
        ] */

    const [listItems, setListItems] = useState("")

    let item1 = "Hej"
    //Create (Set) data in realtime database
    function createData() {

        // set, sets data.  update, updates data.
        set(ref(db, 'textList/'), {
            text: item1
        }).then(() => {
            alert("Data set!")
        }).catch((error) => {
            alert(error)
        });
    }

    function updateData() {
        update(ref(db, 'textList/'), {
            text: "Hejsan"
        }).then(() => {
            alert("Data updated!")
        }).catch((error) => {
            alert(error)
        });
    }

    function removeData() {
        remove(ref(db, "textList/"), {
            text: "Hejsan"
        }).then(() => {
            alert("Data removed!")
        }).catch((error) => {
            alert("Error")
        })
    }


    useEffect(() => {
        const starCountRef = ref(db, 'textList/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (data != null) {
                setListItems(data)
            }

        });
    }, [])





    const flatlistRender = ({ item }) => {

        return (
            <View style={[styles.renderItem, styles.borderShadow]}>
                <Text style={styles.renderTextTitle}>{item}</Text>
                <View style={styles.renderRemoveItem}>
                    <View style={{ height: "80%", width: 1, backgroundColor: "#c6c6c6", marginRight: 10 }} />

                    <ListRemoveButton />

                </View>
            </View >
        )
    }




    return (
        <>
            <Button
                title="Add item"
                onPress={() => {
                    createData()
                }}
            />
            <Button
                title="Update item"
                onPress={() => {
                    updateData()
                }}
            />
            <Button
                title="Remove item"
                onPress={() => {
                    removeData()
                }}
            />
            <FlatList style={styles.contentContainer}
                data={Object.values(listItems)}
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