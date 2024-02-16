import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginActivity from './Pages/Login';







const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginActivity} options={{headerShown: false}}/>
        
         
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;