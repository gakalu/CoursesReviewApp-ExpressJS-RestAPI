import { StyleSheet, Text, View } from "react-native";
import About from "../comopnents/About";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Courses = () => {
  <Stack.Navigator>
    <Stack.Screen name="CoursesList" component={CourseList}></Stack.Screen>
    <Stack.Screen name="CourseDetails" component={CourseDetails}></Stack.Screen>
    <Stack.Screen name="AddReview" component={AddReview}></Stack.Screen>
  </Stack.Navigator>;
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Icon name="home" size="30"></Icon>,
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color }) => <Icon name="user" size="30"></Icon>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
