import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Badge, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header1() {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
          <View style={styles.leftContainer}>
            <Button style={[styles.iconMain, styles.backIcon]}>
              <Icon name="chevron-back-outline" size={23} color="#000" />
            </Button>
            <Button style={[styles.iconMain, styles.searchIcon]}>
              <Icon name="search" size={23} color="#fff" />
            </Button>
          </View>
          <View style={[styles.rightContainer, { position: 'relative' }]}>
            <Badge style={{position: 'absolute', top: 0, zIndex: 999999, backgroundColor: "#F5673F", color: '#fff'}} size={22}>3</Badge>
            <Button style={[styles.iconMain, styles.notificationIcon]}>
              <Icon name="notifications-outline" color="#000" size={20} />
            </Button>
          </View>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
  leftContainer: {flexDirection: 'row', flex: 3, justifyContent: 'space-between', alignItems: 'center',},
  rightContainer: { flex: 4, alignItems: "flex-end", justifyContent: 'center' },
  iconMain: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center"
  },
  backIcon: {
    borderColor: "#dadada",
  },
  searchIcon: {
    borderColor: "#dadada",
    backgroundColor: "#1E2163"
  },
  notificationIcon: {
    borderColor: "#dadada",
  },
})
