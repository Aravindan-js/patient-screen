import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native-paper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card1 from "../components/Card1";
import DoctorList from "./DoctorList";
import FilterTab from "./FilterTab";

export default function Specialisations() {
  const categoryData = [
    {
      catId: 1,
      catTitle: 'General Physician',
      catIcon: <MaterialCommunityIcons name="stethoscope" size={40} />,
    },
    {
      catId: 2,
      catTitle: 'Cardiologist',
      catIcon: <Image source={require('../assets/spec/heart.png')} style={{width: 40, height: 40}} />,
    },
    {
      catId: 3,
      catTitle: 'Gynecologist',
      catIcon: <Image source={require('../assets/spec/uterus.png')} style={{width: 40, height: 40}} />,
    },
    {
      catId: 4,
      catTitle: 'Orthopedic',
      catIcon: <Image source={require('../assets/spec/orthopedics.png')} style={{width: 40, height: 40}} />,
    },
  ]
  const [category, setCategory] = useState(categoryData);
  const [activeCategory, setActiveCategory] = useState(1)
  const [bookMarkView, setBookMarkView] = useState(false)

  const changeCategory = (id) => {
    setActiveCategory(id)
  }

  const changeBookMarkView = (status) => {
    setBookMarkView(status)
  }


  return (
    <>
      <View style={styles.specialisation}>
          <View style={{ flexDirection: "row", paddingBottom: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 22 }}>Specialisations</Text>
            <View style={{ flex: 2, alignItems: "flex-end", justifyContent: "center" }}>
              <Text style={{ color: "#3fe5ff", fontWeight: "bold" }}>See All</Text>
            </View>
          </View>

          {/* Specialisations Menu */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}>

            {category && category.length ?
              category.map(elem => {
                return (
                  <View style={styles.cardContainer} key={elem.catId}>
                    <TouchableWithoutFeedback onPress={() => changeCategory(elem.catId)}>
                      {/* click me */}
                      <View style={{width: '100%'}}>
                      <Card1 active={activeCategory === elem.catId}>
                        {elem.catIcon}
                      </Card1>
                      </View>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.textCenter, styles.categoryTitle, (activeCategory == elem.catId) ? styles.activeFont : {}]}>
                      {elem.catTitle}
                    </Text>
                  </View>
                );
              })
            : null}
          </View>
          {/* Specialisations Menu */}


        </View>

        {/* FILTERED CARD LIST */}
          {/* FILTER TAB */}
          <FilterTab bookMarkView={bookMarkView} changeBookMarkView={changeBookMarkView} />
          {/* FILTER TAB */}
          <View style={{flex: 1}}>
            <DoctorList activeCategory={activeCategory} bookMarkView={bookMarkView} />
          </View>
          {/* FILTERED CARD LIST */}

    </>
  )
}


const styles = StyleSheet.create({
  cardContainer: {
    // width: '15%',
    width: '23%',
    alignItems: 'center'
  },
  categoryTitle: {
    fontSize: wp('3%')
  },
  activeFont: {fontWeight: 'bold'},
  textCenter: {textAlign: 'center'},
  specialisation: {
    paddingTop: 25,
  },
})
