import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import styles from './ListAddScreenStyles'
import SelectedFormat from './SelectedFormat'
import { ListFormatMode } from '../ProjectContext'

const ListAddScreen = () => {

  const [listTitle, setListTitle] = useState("")
  const listFormat = ["Text", "Bullet list"]
  const { formatSelected, setFormatSelected } = useContext(ListFormatMode)

  const listRenderItem = ({ item }) => {

    return (
      <View style={styles.formatOption}>
        <TouchableOpacity style={{ width: "100%", alignItems: "center" }}
          onPress={() => {
            /* Set text mode */
            console.log(item);
            setFormatSelected(item)
          }}
        >
          <Text style={{ fontSize: 18 }}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <TextInput
          placeholder='Title'
          onChangeText={(type) => setListTitle(type)}
          style={{ fontSize: 20 }}
        />
        <View style={{ height: 1, backgroundColor: "black", marginTop: 10 }} />



        {formatSelected !== null ? (
          <View>
            <SelectedFormat
              format={formatSelected}
              title={listTitle}
            />
          </View>
        ) : (
          <View style={styles.formatContainer}>
            <Text style={{ fontSize: 20, marginRight: "auto", marginBottom: "10%" }}>Choose format</Text>
            <FlatList
              style={{ width: "100%" }}
              data={listFormat}
              renderItem={listRenderItem}
            />
            <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
          </View>
        )}






      </View>
    </View>
  )
}

export default ListAddScreen