import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Stars from "components/Stars";

const Course = ({ data }) => {
  const { index, title, faculty, code, rating } = data;
  const navigation = useNavigation();
  const infoPressed = () => {
    navigation.navigate("CourseDetails", data);
  };
  const editHandler = () => {
    navigation.navigate("AddNewCourse", data);
  };
  const deleteHandler = (id) => {
    const courses = data.filter((course) => course._id !== id);
    navigation.navigate("CourseList", courses);
  };
  return (
    <View style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={rating} />
        </View>

        <View style={styles.course}>
          <Text>{title}</Text>
          <Text style={styles.faculty}>
            {code} - {faculty}
          </Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight
            onPress={infoPressed}
            style={styles.button}
            underlayColor="#5398DC"
          >
            <Text style={styles.buttonText}>Details</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={editHandler}
            style={styles.button}
            underlayColor="#5398DC"
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={deleteHandler}
            style={styles.button}
            underlayColor="#5398DC"
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: "column",
    flex: 8,
  },
  faculty: {
    color: "grey",
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
});

export default Course;
