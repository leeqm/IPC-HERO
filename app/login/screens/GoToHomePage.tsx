import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {router} from 'expo-router';

export default function GoToHomePage() {
  return (
    router.replace('/(drawer)/home')
  )
}

const styles = StyleSheet.create({})