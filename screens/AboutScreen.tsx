
import React from 'react';
import { View, Text, Linking, StyleSheet, Button } from 'react-native';

export default function AboutScreen() {
  const email = 'your.email@example.com'; // заміни на свій

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Author: Your Name</Text>
      <Text style={styles.text}>Contact: {email}</Text>
      <View style={{ marginTop: 12 }}>
        <Button title="Send Email" onPress={() => Linking.openURL(`mailto:${email}`)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#25292e', padding: 16 },
  text: { color: '#fff', fontSize: 18, marginBottom: 8 },
});
