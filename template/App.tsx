import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';
import Toast from 'react-native-simple-toast';

const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
    <Text>Welcome to the Profile Screen!</Text>
    <TouchableOpacity  
      onPress={()=>{
        Toast.show('Back to Home Screen.', Toast.SHORT, {
          backgroundColor: 'blue',
        });
        navigation.navigate("Home")
      }}>
       
        <Text> Go to Home Screen</Text>
    </TouchableOpacity>
  </View>
  )
}

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>{'Date :- '}{moment(new Date()).format('DD MMM YYYY')}</Text>
      <Text>Welcome to React Native Home Screen!</Text>
      <TouchableOpacity  
        onPress={()=>navigation.navigate("Profile")}>
         
          <Text> Go to Profile Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{headerShown:false}} 
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default App;