import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RecyclerViewBackedScrollViewBase,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const AddNewCourse = ({ navigation, route }) => {
  const [state, setState] = useState({
    _id: null,
    title: "",
    faculty: "",
    code: "",
    rating: 0,
    review: [],
    submitting: false,
  });
  const data = route.prams;
  useEffect(() => {
    if (route.prams) {
      const { _id, title, faculty, code } = route.prams;
      setCourse((intial) => ({ ...intial, id: _id, title, faculty, code }));
    }
  }, []);

  const submit = () => {
    if (course.id) {
      fetch(`Zhttp://localhost:3000/courses/${course.id}`, {
        method: "post",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(course),
      })
        .then((response) => response.json())
        .then((data) => {
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("http://localhost:3000/courses/add", {
        method: "post",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(course),
      })
        .then((response) => response.json())
        .then((data) => {
          navigation.goBack();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    const title = data ? "Edit Course" : "Add New Course";
    navigation.setOptions({ title });
  }, []);
  return (
    <KeyboardAwaredScrollView style={styles.root}>
      <Text style={styles.addReview}>
        {data ? "Edit Course" : "Add New Course"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={course.title}
        onChangeText={(val) => setState({ ...course, title: val })}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Faculty"
        value={course.faculty}
        onChangeText={(val) => setState({ ...course, faculty: val })}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Code"
        value={course.code}
        onChangeText={(val) => setState({ ...course, code: val })}
      ></TextInput>
      <TextInput style={styles.input}></TextInput>

      <View style={{ flex: 1, flexDirection: "row" }}>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <TouchableOpacity
              style={styles.starButton}
              onPress={() => setState({ ...state, rating: i })}
            >
              <Icon
                key={i}
                name="star"
                size={30}
                color={i > state.rating ? "gray" : "yellow"}
              />
              ;
            </TouchableOpacity>
          );
        })}
      </View>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline={true}
        numberOfLines={10}
      ></TextInput>
      <TouchableOpacity style={styles.submitButton} onPress={submit}>
        Submit
      </TouchableOpacity>
    </KeyboardAwaredScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: "#444",
    textAlign: "center",
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 3,
  },
  rating: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "center",
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default AddNewCourse;
