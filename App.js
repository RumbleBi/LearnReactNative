import React from 'react';
import DateHead from './components/DateHead';
import AddToDo from './components/AddToDo';
import Empty from './components/Empty';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

export default function App() {
  const today = new Date();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper} edges={['bottom']}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          {/*props안에 배열형태로 선언, 하단 부분에만 SafeArea적용하겠다는 뜻*/}
          <DateHead date={today} />
          <Empty />
          <AddToDo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});
