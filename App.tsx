import { Inter_400Regular, Itim_400Regular, useFonts } from '@expo-google-fonts/dev';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import React, { StyleSheet, Text, View, Image, ActivityIndicator, StatusBar } from 'react-native';
import { AccountStack } from './screens/stacks/AccountStack';
import EstudianteStack from './screens/stacks/EstudianteStack';
import AppStates from './utils/AppStates';


export default function App() {

  const [load, setLoad] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false)
  const [rank, setRank] = useState<string>("")
  global.isLoaded = () => {
    return load;
  }

  global.isLogged = () => {
    return logged
  }

  global.setRank = (parameter: string) => {
    setRank(parameter)
  }

  global.getRank = () => {
    return rank
  }

  global.setLogged = (parameter: boolean) => {
    setLogged(parameter)
  }


  let [fontsLoaded] = useFonts({
    Itim_400Regular,
    Inter_400Regular,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 5000)
  })

  const RankPicker = () => {
    return  <> 
      {rank ? rank == "estudiante" ? <EstudianteStack/> : null : <EstudianteStack/>}
    
    </>


  }
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <NavigationContainer>
          <AppStates>
            <StatusBar backgroundColor={"transparent"} />
            {load ? logged ? <RankPicker /> : <AccountStack /> : <View style={styles.container}>
              <View>
                <Image source={require("./assets/utelvt-logo.png")}
                  style={{ width: 150, height: 150 }}
                />
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontFamily: "Itim_400Regular", color: "black" }}>¡ Bienvenido !</Text>
              </View>
              <View>
                <Text style={{ fontSize: 20, fontFamily: "Itim_400Regular", color: "black" }}>Por favor, espera un momento...</Text>
              </View>
              <ActivityIndicator size={"large"} color="red" />

            </View>}
          </AppStates>
        </NavigationContainer>
      </>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
