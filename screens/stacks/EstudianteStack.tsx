
import { Inter_400Regular, Itim_400Regular, useFonts } from "@expo-google-fonts/dev";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/base";
import { useContext } from "react";
import React, { Dimensions, View, Text, TouchableNativeFeedback, Platform, ToastAndroid, Image } from "react-native";
import AppContext from "../../utils/AppContext";
import Inicio from "../estudiante/Inicio";

const Drawer = createDrawerNavigator();
export const EstudianteStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerStyle: { width: Dimensions.get("window").width - (Dimensions.get("window").width / 3.8) } }}

            drawerContent={props => <Menu {...props} />}
            useLegacyImplementation={true}
        >
            <Drawer.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
}

const Menu = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        Itim_400Regular,
        Inter_400Regular,
    });
    const { usuario, handleLogOut }: any = useContext(AppContext)
    return (
        <View style={{ backgroundColor: 'lightgreen', width: Dimensions.get("window").width - (Dimensions.get("window").width / 3.8), height: Dimensions.get("window").height, justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "white", width: Dimensions.get("window").width - (Dimensions.get("window").width / 3.25), height: Dimensions.get("window").height - (Dimensions.get("window").height / 15), borderRadius: 100 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ maxWidth: 50, maxHeight: 35, flex: 1 }}>
                        <Image
                            style={{ height: 50, width: 50 }}
                            source={require("../../assets/utelvt-logo.png")} />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ width: 150, height: 150, borderRadius: 80, backgroundColor: usuario.color, borderTopWidth: 4, borderRightWidth: 4 }}>
                            <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
                                <Text allowFontScaling={false} style={{ color: "white", fontWeight: "bold", fontSize: 82 }}>{usuario?.nombre.split(" ")[0][0]}</Text>

                            </View>

                        </View>

                        <View style={{ alignItems: "flex-end", bottom: 25 }}>
                            <View style={{ overflow: "hidden", borderRadius: 50, height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.05), width: Dimensions.get("window").width - (Dimensions.get("window").width / 1.175), backgroundColor: "lightblue", borderColor: "lightgray", borderTopWidth: 2, borderRightWidth: 2 }}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', false)} onPress={() => {
                                    if (Platform.OS == "android") {
                                        ToastAndroid.show("Funcionalidad aún no implementada.", ToastAndroid.LONG)
                                    }
                                }}>
                                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>

                                        <Icon name="camera" type="material-community" color="black" />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={{ height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.115), width: Dimensions.get("window").width - (Dimensions.get("window").width / 2.5), borderWidth: 3, borderRadius: 80, borderColor: "orange" }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, fontFamily: "Itim_400Regular" }}>{usuario?.nombre}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={{ color: "black", fontSize: 16, fontFamily: "Itim_400Regular" }}>{usuario?.correo}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Text style={{ color: "black", fontSize: 16, fontFamily: "Itim_400Regular" }}>{usuario?.matricula?.carrera}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.6), marginBottom: 30 }}>
                    <View style={{ flex: 1, alignItems: "center" }}>

                        <View style={{ overflow: "hidden", height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.115), width: Dimensions.get("window").width - (Dimensions.get("window").width / 2.5), borderWidth: 1, borderTopWidth: 3, borderRightWidth: 3, borderColor: "orange", borderRadius: 15, backgroundColor: "yellow" }}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', false)} onPress={() => {
                                if (Platform.OS == "android") {
                                    ToastAndroid.show("Funcionalidad aún no implementada.", ToastAndroid.LONG)
                                }
                            }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 1, marginLeft: 5 }}>
                                        <Text style={{ color: "black", fontWeight: "200", fontSize: 20, fontFamily: "Itim_400Regular" }}>Editar Datos</Text>
                                    </View>
                                    <View style={{ justifyContent: "center" }}>
                                        <Icon name="user-edit" type="font-awesome-5" color="red" size={28} style={{ marginRight: 15 }} />
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>

                        <View style={{ overflow: "hidden", height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.115), width: Dimensions.get("window").width - (Dimensions.get("window").width / 2.5), borderWidth: 1, borderTopWidth: 3, borderRightWidth: 3, borderColor: "orange", borderRadius: 15, backgroundColor: "yellow" }}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', false)} onPress={() => {
                                if (Platform.OS == "android") {
                                    ToastAndroid.show("Funcionalidad aún no implementada.", ToastAndroid.LONG)
                                }
                            }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 1, marginLeft: 5 }}>
                                        <Text style={{ color: "black", fontWeight: "200", fontSize: 20, fontFamily: "Itim_400Regular" }}>Calificaciones</Text>
                                    </View>
                                    <View style={{ justifyContent: "center" }}>
                                        <Icon name="note" type="simple-line" color="red" size={28} style={{ marginRight: 15 }} />
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>

                        <View style={{ overflow: "hidden", height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.115), width: Dimensions.get("window").width - (Dimensions.get("window").width / 2.5), borderWidth: 1, borderTopWidth: 3, borderRightWidth: 3, borderColor: "orange", borderRadius: 15, backgroundColor: "yellow" }}>
                            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', false)} onPress={() => {
                                if (Platform.OS == "android") {
                                    ToastAndroid.show("Funcionalidad aún no implementada.", ToastAndroid.LONG)
                                }
                            }}>
                                <View style={{ flexDirection: "row", flex: 1 }}>
                                    <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 1, marginLeft: 5 }}>
                                        <Text style={{ color: "black", fontWeight: "200", fontSize: 20, fontFamily: "Itim_400Regular" }}>Matrícula</Text>
                                    </View>
                                    <View style={{ justifyContent: "center" }}>
                                        <Icon name="note" type="simple-line" color="red" size={28} style={{ marginRight: 15 }} />
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>

                    <View style={{ overflow: "hidden", height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.115), width: Dimensions.get("window").width - (Dimensions.get("window").width / 2.5), borderWidth: 1, borderTopWidth: 3, borderRightWidth: 3, borderColor: "orange", borderRadius: 15, backgroundColor: "yellow", borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}>
                        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', false)} onPress={() => {
                            handleLogOut();
                        }}>
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ alignItems: "flex-start", justifyContent: "center", flex: 1, marginLeft: 15 }}>
                                    <Text style={{ color: "black", fontWeight: "200", fontSize: 20, fontFamily: "Itim_400Regular" }}>Cerrar Sesión</Text>
                                </View>
                                <View style={{ justifyContent: "center" }}>
                                    <Icon name="note" type="simple-line" color="red" size={28} style={{ marginRight: 15 }} />
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default EstudianteStack