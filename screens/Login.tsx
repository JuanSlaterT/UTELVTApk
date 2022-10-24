import { Icon, Input } from "@rneui/base";
import { useContext, useState } from "react";
import React, { View, Text, Image, Dimensions, TouchableNativeFeedback, Platform, ToastAndroid, ActivityIndicator, ScrollView } from "react-native";
import AppContext from "../utils/AppContext";

export const Login = ({ navigation }) => {
    let usuarios = [
        {
            usuario: "Test",
            contraseña: "Test321",
            rango: "estudiante",
            nombre: "Juan Arévalo",
            matricula: {
                carrera: "Ingeniería en Tecnologías de la Información",
                nivel: "1",
                paralelo: "A",
                horario: {
                    uri: "https://i.imgur.com/MrFFjUD.png"
                }
            }

        },
        {
            usuario: "Prueba",
            contraseña: "Prueba123",
            rango: "estudiante",
            nombre: "Eliana Carrasco",
            matricula: {
                carrera: "Ingeniería Química",
                nivel: "1",
                paralelo: "C",
                horario: {
                    uri: "https://i.imgur.com/YSxrSaK.png"
                }
            }
        }
    ]
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [load, setLoad] = useState<boolean>(false);
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const [userError, setUserError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")

    const {handleLogIn}: any = useContext(AppContext)
    const validateUsername = () =>{
        setUserError("")
        if(!user || user.length == 0){
            setUserError("El nombre de usuario no puede estar vacío.")
        }else if(usuarios.filter(item => item.usuario == user).length == 0){
            setUserError("No existen nombres de usuario con este nombre.")
        }
    }

    const validatePassword = () =>{
        setPasswordError("")
        if(!password || password.length == 0){
            setPasswordError("La contraseña del usuario no puede estar vacía.")
        }
    }
    return (
        <ScrollView>
            <View style={{ flex: 3, backgroundColor: "gold" }}>

                <View style={{ flex: 1, maxHeight: Dimensions.get("window").height - (Dimensions.get("window").height / 1.5) }}>
                    <Image
                        style={{ maxHeight: Dimensions.get("window").height - (Dimensions.get("window").height / 1.5), maxWidth: Dimensions.get("window").width }}
                        source={require("../assets/UTELVT-foto.jpg")}
                    />

                </View>
                <View style={{ flex: 2, marginTop: 15}}>
                    <View style={{ backgroundColor: "white", width: Dimensions.get("window").width, height: Dimensions.get("window").height - (Dimensions.get("window").height / 3.5), borderTopRightRadius: 80, borderTopLeftRadius: 80, alignItems: "center" }}>
                        <View style={{ borderWidth: 2, borderTopRightRadius: 80, borderTopLeftRadius: 80, width: Dimensions.get("window").width - (Dimensions.get("window").width / 6), marginTop: 10, height: Dimensions.get("window").height - (Dimensions.get("window").height / 3), borderBottomWidth: 0, flex: 1 }}>
                            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                                <Image source={require("../assets/utelvt-logo.png")}
                                    style={{ width: 75, height: 75 }}
                                />
                            </View>
                            <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text allowFontScaling={false} style={{ fontSize: 24, fontFamily: "Itim_400Regular", color: "black" }} >Portal de Inicio</Text>
                            </View>

                            <View style={{ marginTop: 10, alignItems: "center", justifyContent: "center" }}>
                                <View>
                                    <Input onEndEditing={()=> {validateUsername()}} errorMessage={userError} allowFontScaling={false} leftIcon={<Icon name="account" type="material-community" />} value={user} onChangeText={setUser} containerStyle={{ width: 250 }} inputContainerStyle={{ borderRadius: 25 }} label="Usuario" placeholder="Nombre de Usuario" />
                                </View>
                            </View>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <View>
                                    <Input errorMessage={passwordError} onEndEditing={()=>{validatePassword()}} rightIcon={<TouchableNativeFeedback onPress={() => setHiddenPassword(!hiddenPassword)}><View><Icon name={hiddenPassword ? "eye-off" : "eye"} type="material-community" /></View></TouchableNativeFeedback>} secureTextEntry={hiddenPassword} allowFontScaling={false} leftIcon={<Icon name="lock" type="material-community" />} value={password} onChangeText={setPassword} containerStyle={{ width: 250 }} inputContainerStyle={{ borderRadius: 25 }} label="Contraseña" placeholder="Contraseña" />
                                </View>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 25 }}>
                                <TouchableNativeFeedback onPress={() => {
                                    validateUsername()
                                    validatePassword()
                                    if(userError != ""){
                                        return;
                                    }
                                    if(passwordError != ""){
                                        return;
                                    }
                                    
                                    if (!load) {
                                        setLoad(true);
                                        setTimeout(() => {
                                            let data = usuarios.filter(item => item.usuario == user)
                                            if(data[0].contraseña != password){
                                                setPasswordError("Contraseña incorecta.")
                                            }else{
                                                handleLogIn(data[0])
                                            }
                                            setLoad(false)
                                        }, 5000)
                                    } else {
                                        if (Platform.OS == "android") {
                                            ToastAndroid.show("Ya estás iniciando sesión...", ToastAndroid.LONG)
                                        }
                                    }
                                }}>
                                    <View style={{ height: 60, width: 135, backgroundColor: "gold", borderTopWidth: 2, borderRightWidth: 2, borderColor: "black", borderRadius: 50 }}>
                                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, flexDirection: "row" }}>
                                            <View><Text allowFontScaling={false} style={{ fontSize: 20, fontFamily: "Itim_400Regular", color: "white" }}>Ingresar </Text></View>
                                            <View>
                                                {load ? <ActivityIndicator size={"small"} color="black" /> : <Icon name="login" type="material-community" />}
                                            </View>
                                        </View>

                                    </View>
                                </TouchableNativeFeedback>
                            </View>

                        </View>

                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Login;