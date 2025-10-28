import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NoteScreen() {
  const [note, setNote] = useState('');

  useEffect(() => {
    loadNote();
  }, []);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem('userNote', note);
      Alert.alert('✅ Saved', 'Your note has been saved locally!');
      Keyboard.dismiss(); // ховає клавіатуру після збереження
    } catch (e) {
      console.error('Save error', e);
      Alert.alert('❌ Error', 'Could not save note.');
    }
  };

  const loadNote = async () => {
    try {
      const savedNote = await AsyncStorage.getItem('userNote');
      if (savedNote !== null) setNote(savedNote);
    } catch (e) {
      console.error('Load error', e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              multiline
              placeholder="📝 Write your note here..."
              placeholderTextColor="#aaa"
              value={note}
              onChangeText={setNote}
              textAlignVertical="top"
            />
            <Button title="Save Note" onPress={saveNote} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  scroll: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
    padding: 15,
    minHeight: 200,
    marginBottom: 15,
    fontSize: 16,
  },
});
