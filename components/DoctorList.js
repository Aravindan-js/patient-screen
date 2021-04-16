import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ContentCard from './ContentCard';


export default function DoctorList(props) {
  let _data = [
    {
      id: 1,
      name: 'Dr. Doc 1',
      about: 'General Physician',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 1,
      isBookmarked: false
    },
    {
      id: 2,
      name: 'Dr. Faisal Khan',
      about: 'General Physician',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 1,
      isBookmarked: false
    },
    {
      id: 3,
      name: 'Dr. Faisal Khan',
      about: 'General Physician',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 1,
      isBookmarked: false
    },
    {
      id: 4,
      name: 'Dr. Faisal Khan',
      about: 'Cardio expert',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 2,
      isBookmarked: false
    },
    {
      id: 5,
      name: 'Dr. Faisal Khan',
      about: 'Gyno expert',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 3,
      isBookmarked: false
    },
    {
      id: 6,
      name: 'Dr. Faisal Khan',
      about: 'Ortho expert',
      experience: '12 Years of exp',
      city: 'New Town',
      state: 'yelahanka',
      catId: 4,
      isBookmarked: false
    },
  ]

  const [data, setData] = useState(_data)

  const toggleBookmark = (id) => {
    let localData = [...data]
    localData = localData.map(elem => {
      if(elem.id == id){
        if(!elem.isBookmarked) {
          elem.isBookmarked = true
        }else{
          elem.isBookmarked = false
        }
      }
      return elem
    })
    setData(localData)
  }

  return (
    <ScrollView style={{marginBottom: 20}}>
      {/* CARD LIST VIEW */}
        {data.filter(x => x.catId == props.activeCategory)
        .filter(x => (!props.bookMarkView) ? true : x.isBookmarked == props.bookMarkView)
        .map((elem, index) => {
          return (
            <ContentCard
              {...elem}
              key={index}
              toggleBookmark={toggleBookmark}
            />
          );
        })}
      {/* CARD LIST VIEW */}
    </ScrollView>
  );
}
