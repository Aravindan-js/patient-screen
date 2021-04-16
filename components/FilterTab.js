import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function FilterTab(props) {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.leftContainer}>
          <TouchableWithoutFeedback onPress={() => props.changeBookMarkView(false)}>
            <View style={(!props.bookMarkView ? styles.specialView : {})}>
              <Text style={ (props.bookMarkView) ? styles.normalFont : styles.specialFont }>ALL</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => props.changeBookMarkView(true)}>
            <View style={(props.bookMarkView ? styles.specialView : {})}>
              <Text style={ (!props.bookMarkView) ? styles.normalFont : styles.specialFont }>BOOKMARKED</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.rightContainer}>
          <Text><SimpleLineIcons name="equalizer" size={22} /></Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  leftContainer: {flexDirection: 'row', flex: 2, justifyContent: 'space-between'},
  rightContainer: {flex: 2.3, alignItems: 'flex-end'},
  root: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20},
  specialFont: {fontSize: wp('4.5%'), fontWeight: 'bold', color: 'black'},
  normalFont: {fontSize: wp('4.5%'), fontWeight: 'normal', color: 'black'},
  specialView: {borderBottomWidth: 2}
})
