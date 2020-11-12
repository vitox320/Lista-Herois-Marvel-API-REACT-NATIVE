import * as React from 'react';
import Home from './src/screens/Home'
import Description from './src/screens/Description'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';






const Drawer = createDrawerNavigator();
function App() {
  return (  
    
      
          <NavigationContainer >
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Heroes" component={Home} />
              <Drawer.Screen name="Description" component={Description} />
            </Drawer.Navigator>
          </NavigationContainer>
       
    
     
  );
}
export default App