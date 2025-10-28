import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TipOfTheDay extends Component {
  myDate: Date;
  tips: string[];

  constructor(props: any) {
    super(props);
    this.myDate = new Date();
    this.tips = [
      "🌿 Take a short walk outside today.",
      "💧 Drink more water.",
      "📖 Learn something new every day.",
      "😊 Smile at someone today.",
      "💤 Get enough sleep tonight.",
    ];
  }

  render() {
    const selected = Math.floor(Math.random() * this.tips.length);
    const today =
      this.myDate.getDate().toString() +
      "." +
      (this.myDate.getMonth() + 1).toString() +
      "." +
      this.myDate.getFullYear().toString();

    return (
      <View style={styles.container}>
        <Text style={styles.date}>📅 Today: {today}</Text>
        <Text style={styles.tip}>{this.tips[selected]}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  date: {
    color: '#aaa',
    fontSize: 16,
    marginBottom: 6,
  },
  tip: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
