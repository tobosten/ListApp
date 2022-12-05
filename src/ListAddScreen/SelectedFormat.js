import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import styles from './ListAddScreenStyles'
import { BorderShadows } from '../BorderShadows'
import { ListFormatMode } from '../ProjectContext'
import ListRemoveButton from '../components/ListRemoveButton'

const SelectedFormat = ({ format, title }) => {

    const { setFormatSelected } = useContext(ListFormatMode)
    const [update, setUpdate] = useState(false)


    const [text, setText] = useState("")

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
                    <></>
                )
            }
        </View>
    )
}

export default SelectedFormat