import React from "react";
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react/cjs/react.production.min";

import Course from "./components/Course";
import Header from "./components/Header";

const data = [
  {
    title: "Web Application Programming",
    faculty: "Asaad Saad",
    code: "CS472",
    rating: 4,
  },
  {
    title: "Modern Web Application",
    faculty: "Asaad Saad",
    code: "CS572",
    rating: 5,
  },
  {
    title: "Enterprise Architecture",
    faculty: "Joe Bruen",
    code: "CS557",
    rating: 4,
  },
  { title: "Algorithms", faculty: "Clyde Ruby", code: "CS421", rating: 5 },
  {
    title: "Object Oriented JavaScript",
    faculty: "Keith Levi",
    code: "CS372",
    rating: 3,
  },
  { title: "Big Data", faculty: "Prem Nair", code: "CS371", rating: 5 },
  {
    title: "Web Application Architecture",
    faculty: "Rakesh Shrestha",
    code: "CS377",
    rating: 5,
  },
  {
    title: "Big Data Analytics",
    faculty: "Mrudula Mukadam",
    code: "CS378",
    rating: 5,
  },
];

export default function CoursesList() {
  const [display, setDisplay] = useState(data);
  const [state, setState] = useState({
    loading: false,
    error: false,
    data: [],
  });
  useState(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (response.success) {
          setState((initalState) => ({
            ...state,
            display: data,
            loading: false,
          }));
        } else {
          setState((initalState) => ({
            ...state,
            display: [],
            loading: false,
            error: true,
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderItem = ({ item, index }) => {
    return <course data={{ ...item, index }} />;
  };
  const searchHandeler = (val) => {
    if (val) {
      const copy = [
        ...display.filter((item) =>
          item.title.toLowerCase().includes(val.toLowerCase())
        ),
      ];
      setDisplay((initialState) => ({ ...state, display: copy }));
    } else {
      setDisplay(data);
    }
  };
  AddCourseHandler = ({ navigate }) => {
    navigate("AddNewCourse");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? 30 : 0,
        paddingBottom: 200,
      }}
    >
      <View>
        <Header />
      </View>
      <TextInput style={styles.input} onchange={searchHandeler}></TextInput>
      <FlatList
        data={state.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
  },
});
