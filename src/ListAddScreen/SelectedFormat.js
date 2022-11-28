import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './ListAddScreenStyles'
import { BorderShadows } from '../BorderShadows'
import { ListFormatMode } from '../ProjectContext'
import ListRemoveButton from '../components/ListRemoveButton'

const SelectedFormat = ({ format, title }) => {

    const { setFormatSelected } = useContext(ListFormatMode)


    const [text, setText] = useState("")
    const [bullets, setBullets] = useState([
        { text: "Bullet 1" },
        { text: "Bullet 2" },
    ])

    const bulletRenderItem = ({ item, index }) => {

        return (
            <View style={[styles.bulletContainer, BorderShadows.depth6]}>
                <View style={styles.bulletPoint} />
                <Text style={{ fontSize: 18 }}>{item.text}</Text>
                {/* <View style={{ marginLeft: "auto" }}>
                    <ListRemoveButton  /> 
                </View> */}

                <TouchableOpacity
                    style={{ borderWidth: 1, height: 20, width: 20, marginLeft: "auto" }}
                    onPress={() => {
                        console.log(index)
                    }}>
                        <Image 

                        />
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View style={styles.formatContainer}>
            <View style={styles.modeContainer}>
                <Text style={{ fontSize: 18 }}>Mode: {format}</Text>
                <TouchableOpacity style={{ marginLeft: "auto" }}
                    onPress={() => {
                        /* Sets view back to Choose format */
                        setFormatSelected(null)
                    }}
                >
                    <Image
                        style={{ height: 40, width: 40 }}
                        source={format == "Text" ?
                            require("../icons/light/BlackText.png")
                            :
                            require("../icons/light/BlackBulletList.png")}
                    />
                </TouchableOpacity>
            </View>

            {format == "Text" ?
                (
                    <View style={styles.textListContainer}>
                        <TextInput
                            placeholder='Write something'
                            value={text}
                            onChangeText={setText}
                            multiline={true}
                        />
                    </View>
                ) : (
                    <View style={styles.bulletListContainer}>
                        <TouchableOpacity onPress={() => {
                            /* Add new bullet point */
                            let newPoints = bullets
                            console.log(newPoints);

                        }}>
                            <Image
                                source={require("../icons/light/BlackPlus.png")}
                                style={{ height: 40, width: 40, marginLeft: "auto" }}
                            />
                        </TouchableOpacity>

                        <View style={styles.bulletsContainer}>
                            <FlatList
                                data={bullets}
                                renderItem={bulletRenderItem}
                                ListEmptyComponent={() => (
                                    <Text>No bullets</Text>
                                )}
                            />
                        </View>
                    </View>
                )}

        </View>
    )
}

export default SelectedFormat