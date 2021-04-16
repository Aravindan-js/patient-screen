import React from 'react'
import { Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function Card1(props) {
  return (
    <>
      <Surface style={[styles.surface, (props.active)?  styles.activeCard : {}]}>
         {props.children}
      </Surface>
    </>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 14
  },
  activeCard: {
    backgroundColor: '#F5673F'
  }
});
