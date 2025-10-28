import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LinearGradient } from 'react-native';
import TipOfTheDay from '../components/TipOfTheDay';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>

      <View style={styles.tipCard}>
        <TipOfTheDay />
      </View>

      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        onPress={() => navigation.navigate('Note')}
      >
        <Text style={styles.buttonText}>📝 Write a Note</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>👤 About Author</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  tipCard: {
    backgroundColor: '#2a2a2e',
    borderRadius: 15,
    padding: 20,
    marginBottom: 40,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: '#4e8cff',
  },
  secondaryButton: {
    backgroundColor: '#7b3fe4',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
