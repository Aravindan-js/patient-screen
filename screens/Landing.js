import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import DoctorList from '../components/DoctorList';
import FilterTab from '../components/FilterTab';
import Header1 from '../components/Header1';
import HeaderLocation from '../components/HeaderLocation';
import Specialisations from '../components/Specialisations';

var {width, height} = Dimensions.get('window');

const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20, flex: 1}}>
        <View>
          {/* HEADER */}
          <Header1 />
          {/* HEADER */}
          {/* HEADER LOC */}
          <HeaderLocation />
          {/* HEADER LOC */}
        </View>

        <View style={[styles.contentSection]}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>Doctors</Text>
          <Specialisations />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // width: '80%',
    backgroundColor: '#fff',
  },
  contentSection: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Landing;
