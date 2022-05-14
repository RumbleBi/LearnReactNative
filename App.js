/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local //java불러오기
 */

import React from 'react';
import type {Node} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Greeting from './components/Greeting'
import Box from './components/Box'
export default function App() {
  const name = 'JSX';

  return (
    <SafeAreaView>
      <Text>하위~~</Text>
      <Box/>
    </SafeAreaView>
  );
};
