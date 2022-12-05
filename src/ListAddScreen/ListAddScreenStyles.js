import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    titleContainer: {
        /* borderWidth: 1, */
        paddingHorizontal: "10%",
        marginTop: "10%",
    },
    formatContainer: {
        marginTop: "20%",
        alignItems: "center",
        width: "100%"
    },
    formatOption: {
        /*  borderWidth: 1, */
        borderTopWidth: 1,
        height: 50,
        justifyContent: "center",
        width: "100%"
    },
    modeContainer: {
        display: "flex",
        flexDirection: "row",
        /* borderWidth: 1, */
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginBottom: 30,
        width: "100%",
        alignItems: "center"
    },
    modeTextView: {
        borderWidth: 1,
        width: "100%",
        height: "0%"
    },

    textListContainer: {
        width: "100%",
        marginRight: "auto",
        paddingHorizontal: 10,
        borderColor: "#c6c6c6",
        /* borderWidth: 1, */
        borderRightWidth: 1,
    },

    bulletListContainer: {
        width: "100%",
    },
    bulletsContainer: {
        marginTop: 20,
    },
    bulletContainer: {
        display: "flex",
        backgroundColor: "white",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginHorizontal: 5,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        /* borderWidth: 1, */
        marginVertical: 5,
    },
    bulletPoint: {
        backgroundColor: "black",
        height: 5,
        width: 5,
        borderRadius: 100,
        marginRight: 10,
    }

})

export default styles;