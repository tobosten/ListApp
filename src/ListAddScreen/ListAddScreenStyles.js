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
        borderWidth: 1,
        width: "100%",
        alignItems: "center"
    },
    modeTextView: {
        borderWidth: 1,
        width: "100%",
        height: "0%"
    }

})

export default styles;