import { View, Text, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import React, { useState, useRef } from 'react'
import RedRemove from "../icons/light/RedClose.png"
import BlackRemove from "../icons/light/BlackClose.png"

const ListRemoveButton = () => {

    /* const [rotateValue, setRotateValue] = useState(new Animated.Value(0)); */
    const [changeImage, setChangeImage] = useState(false)

    const rotateValue = useRef(new Animated.Value(0)).current

    function rotateImage() {
        rotateValue.current = 0

        Animated.timing(
            rotateValue,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.ease,
                useNativeDriver: true,
            }
        ).start();
        setChangeImage(RedRemove)
    }


    const spin = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"]
    })


    return (
        <TouchableOpacity
            onPress={() => {
                if (changeImage == true) {
                    /* Remove list */
                    console.log("Remove list")
                }
                rotateImage()
                setChangeImage(true)
            }}
        >
            <Animated.Image
                source={changeImage == false ? (BlackRemove) : (RedRemove)}
                style={{
                    height: 30, width: 30,
                    transform: [{ rotate: spin }]
                }}
            />
        </TouchableOpacity>
    )
}

export default ListRemoveButton