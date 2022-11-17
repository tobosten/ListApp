import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    contentContainer: {
        /* borderWidth: 1, */
        width: "90%",
        alignSelf: "center",
        marginTop: 40,
    },
    noListsText: {
        alignSelf: "center",
        marginTop: 20,
        color: "#c6c6c6",
        fontSize: 18
    },
    renderItem: {
        flexDirection: "row",
        height: 50,
        width: "90%",
        alignSelf: "center",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        marginVertical: 10,
    },
    renderTextTitle: {
        flex: 3,
        /* borderWidth: 1, */
        fontSize: 18,
        marginLeft: 20,
    },
    renderRemoveItem: {
        flex: 1,
        flexDirection: "row",
        /* borderWidth: 1, */
        height: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    borderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    addListButton: {
        /* borderWidth: 1, */
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        margin: 30,
        height: 70,
        width: 70,
        borderRadius: 100
    }



})

export default styles;