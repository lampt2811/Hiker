import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailScreen = ({ route }) => {
  const { hike } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hike.name}</Text>
      <Text style={styles.location}>{hike.location}</Text>
      <Text style={styles.date}>{hike.date}</Text>
      <Text style={styles.parking}>{hike.parking}</Text>
      <Text style={styles.length}>{hike.length}</Text>
      <Text style={styles.level}>{hike.level}</Text>
      <Text style={styles.description}>{hike.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default DetailScreen;
