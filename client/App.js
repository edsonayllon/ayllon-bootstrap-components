import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './config';
import Button from './components/Button';

export default function App() {
  const [users, setUsers] = useState([]);

  async function fetchApi() {
    try {
      const res = await fetch(`${config.API_ADDR}/users`);
      const json = await res.json();
      setUsers(json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="button" />
      <Button title="button" isLoading={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
