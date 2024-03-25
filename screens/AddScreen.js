import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Database from "../Database";

const AddScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [parking, setParking] = useState("");
  const [length, setLength] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");

  const handleAddHike = async () => {
    if (
      !name ||
      !location ||
      !date ||
      !parking ||
      !length ||
      !level ||
      !description
    ) {
      Alert.alert(
        "Error",
        "Please enter name, location, date, parking, length, level and description"
      );
      return;
    }
    await Database.addHike(
      name,
      location,
      date,
      parking,
      length,
      level,
      description
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
      />
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
      />
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter date"
      />
      <Text style={styles.label}>Parking:</Text>
      <TextInput
        style={styles.input}
        value={parking}
        onChangeText={setParking}
        placeholder="Enter parking"
      />
      <Text style={styles.label}>Length:</Text>
      <TextInput
        style={styles.input}
        value={length}
        onChangeText={setLength}
        placeholder="Enter length"
      />
      <Text style={styles.label}>level:</Text>
      <TextInput
        style={styles.input}
        value={level}
        onChangeText={setLevel}
        placeholder="Enter level"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddHike}>
        <Text style={styles.addButtonText}>Add Hike</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
  },
  addButton: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddScreen;
