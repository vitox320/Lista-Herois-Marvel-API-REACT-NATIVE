import * as React from 'react';
import Home from './src/screens/Home'
import Description from './src/screens/Description'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}*/


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Heroes" component={Home} />
        <Stack.Screen name="Description" component={Description}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

/*
export default App;

const App = StackNavigator({
  Home: {
    screen: Home
  },
  Description: {
    screen: Description
  },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})
export default App
*/


