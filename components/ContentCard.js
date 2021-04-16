import React from 'react';
import {Text, View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Subheading, Surface, Title} from 'react-native-paper';
import { AirbnbRating } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ContentCard(props) {
  return (
    <>
      {/* CARD SECTION CONTAINER */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
        {/* CARD BOOKMARK ICON */}
        <TouchableWithoutFeedback onPress={() => props.toggleBookmark(props.id)}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {props.isBookmarked ?
              <FontAwesome name="bookmark" size={30} />
            : <FontAwesome name="bookmark-o" size={30} />}
          </View>
        </TouchableWithoutFeedback>
        {/* CARD BOOKMARK ICON */}
        {/* MAIN CARD */}
        <View style={{flex: 6, borderWidth: 0}}>
          <Surface style={[styles.surface, {width: '98%'}]}>
            <View style={{flexDirection: 'row'}}>
              {/* IMAGE AND DESCRIPTION CONTAINER */}
              {/* IMAGE */}
              <View>
                <Image
                  source={require('../assets/doctor/1.jpg')}
                  style={{borderRadius: 10, width: 80, height: 90}}
                />
              </View>
              {/* IMAGE */}
              {/* DESCRIPTION */}
              <View style={{paddingHorizontal: 10}}>
                {/* TITLE */}
                <Subheading>{props.name}</Subheading>
                {/* TITLE */}
                {/* about */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.smallFont, styles.grayText]}>
                    {props.about}
                  </Text>
                  <Text>
                    <Entypo name="dot-single" size={17} />
                  </Text>
                  <Text style={[styles.smallFont, styles.grayText]}>
                    {props.experience}
                  </Text>
                </View>
                {/* about */}
                {/* ABOUT LOCATION */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.grayText]}>
                    <MaterialIcons name="location-on" size={12} />
                  </Text>
                  <Text style={[styles.smallFont, styles.grayText]}>
                    {props.city}
                  </Text>
                  <Text>
                    <Entypo name="dot-single" size={17} />
                  </Text>
                  <Text style={[styles.smallFont, styles.grayText]}>
                    {props.state}
                  </Text>
                </View>
                {/* ABOUT LOCATION */}
              </View>
              {/* DESCRIPTION */}

              {/* IMAGE AND DESCRIPTION CONTAINER */}
              {/* RATING AND AMOUNT */}
              <View></View>
              {/* RATING AND AMOUNT */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* RATING */}
              <View>
                <AirbnbRating
                  showRating={false}
                  count={5}
                  defaultRating={4}
                  size={14}
                />
              </View>
              {/* RATING */}
              {/* AMOUNT */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Title></Title> */}
                <Title>
                  <FontAwesome name="rupee" size={16} /> 200
                </Title>
              </View>
              {/* AMOUNT */}
            </View>
          </Surface>
        </View>
        {/* MAIN CARD */}
      </View>
      {/* CARD SECTION CONTAINER */}
    </>
  );
}


const styles = StyleSheet.create({
  surface: {
    padding: 8,
    elevation: 4,
    borderRadius: 14
  },
  smallFont: {fontSize: wp('3%')},
  grayText: {color: 'gray'},
});
