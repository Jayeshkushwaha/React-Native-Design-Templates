import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native'

export default UserModal = () => {
  const numColumns = 3
  const data = [
    { id: 1, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 2, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 3, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { id: 4, image: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { id: 5, image: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
    { id: 6, image: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
    { id: 7, image: 'https://bootdey.com/img/Content/avatar/avatar7.png' },
    { id: 8, image: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
    { id: 9, image: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { id: 10, image: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
  ]

  const [options, setOptions] = useState(data)
  const [modalVisible, setModalVisible] = useState(false)
  const [userSelected, setUserSelected] = useState({})

  selectItem = user => {
    setUserSelected(user)
    setModalVisible(true)
  }

  const renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    var itemDimension = Dimensions.get('window').width / numColumns
    return (
      <TouchableOpacity
        style={[styles.item, { height: itemDimension }]}
        onPress={() => selectItem(item)}>
        <Image
          style={{ height: itemDimension - 2, width: itemDimension - 2 }}
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
    )
  }

  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true })
      numberOfElementsLastRow++
    }
    return data
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={formatRow(options, numColumns)}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={renderItem}
        numColumns={numColumns}
      />

      <Modal
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        visible={modalVisible}>
        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <ScrollView contentContainerStyle={styles.modalInfo}>
                <Image style={{ width: 200, height: 200 }} source={{ uri: userSelected.image }} />
              </ScrollView>
            </View>
            <View style={styles.popupButtons}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false)
                }}
                style={styles.btnClose}>
                <Text style={styles.txtClose}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },

  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: '#00000057',
    flex: 1,
    marginTop: 20,
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 250,
  },
  popupHeader: {
    marginBottom: 45,
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  popupButton: {
    flex: 1,
    marginVertical: 16,
  },
  btnClose: {
    flex: 1,
    height: 40,
    backgroundColor: '#20b2aa',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtClose: {
    color: 'white',
  },
})