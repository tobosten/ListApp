import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import styles from './ListAddScreenStyles'
import { ListFormatMode } from '../ProjectContext'

const SelectedFormat = ({ format, title }) => {

    const { setFormatSelected } = useContext(ListFormatMode)


    const [text, setText] = useState("")
    const [bullets, setBullets] = useState([{}])

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


            <View>
                <Text>Hej</Text>
            </View>

        </View>
    )
}

export default SelectedFormat