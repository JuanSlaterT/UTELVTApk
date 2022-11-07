import { Inter_400Regular, Itim_400Regular, useFonts } from "@expo-google-fonts/dev";
import { Icon } from "@rneui/base";
import { useContext, useState } from "react";
import React, { Dimensions, View, Image, Text, TouchableNativeFeedback } from "react-native";
import ImageView from "react-native-image-viewing"
import AppContext from "../../utils/AppContext";

export const Inicio = ({ navigation }) => {
    const { usuario }: any = useContext(AppContext)
    const [openHorario, setOpenHorario] = useState<boolean>(false);
    let [fontsLoaded] = useFonts({
        Itim_400Regular,
        Inter_400Regular,
      });
    return (
        <><ImageView
            images={[{ uri: usuario?.matricula?.horario?.uri }]}
            imageIndex={0}
            visible={openHorario}
            onRequestClose={() => setOpenHorario(!openHorario)} />
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", flex: 3, marginTop: 50 }}>

                    <View style={{ alignItems: "flex-start", marginLeft: 25, flex: 1 }}>
                        <View>
                            <Icon name="menu" type="material-community" size={28} allowFontScaling={false} style={{ backgroundColor: "lightgray", borderRadius: 10, width: 35, height: 30 }} />
                        </View>


                    </View>
                    <View style={{ alignItems: "center", flex: 1, marginRight: 0 }}>
                        <Image
                            style={{ height: 150, width: 150 }}
                            source={require("../../assets/utelvt-logo.png")} />

                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1, marginRight: 15 }}>
                        <View style={{ height: 50, width: 50, backgroundColor: usuario?.color, borderRadius: 80, borderTopWidth: 2, borderRightWidth: 2, borderColor: "gray" }}>
                            <View style={{ alignItems: "center", marginTop: 7 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>{usuario?.nombre.split(" ")[0][0]}</Text>
                            </View>

                        </View>
                    </View>



                </View>
                <View style={{ flex: 2, marginTop: 25 }}>
                    <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                        <Text style={{fontSize: 18, fontFamily: "Itim_400Regular"}}>Bienvenid@ de nuevo,</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
                        <Text style={{fontSize: 16, fontFamily: "Itim_400Regular"}}>{usuario?.nombre}</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-start", marginTop: 15 }}>
                        <Text style={{ fontSize: 24, fontFamily: "Itim_400Regular" }}>INICIO - UTELVT</Text>
                    </View>
                </View>
                <View style={{ flex: 8, backgroundColor: "green", borderTopLeftRadius: 80, borderTopRightRadius: 80 }}>
                    <View style={{ alignItems: "center", marginTop: 15 }}>
                        <Text style={{ color: "gold", fontWeight: "bold", fontSize: 32 }}>HORARIO </Text>
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12 }}>SEMESTRE 2022-1S</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", marginTop: 25 }}>
                        <View style={{ height: Dimensions.get("window").height - (Dimensions.get("window").height / 1.3), width: Dimensions.get("window").width - (Dimensions.get("window").width / 18), borderWidth: 0, borderColor: "orange" }}>
                            <TouchableNativeFeedback onPress={() => {
                                setOpenHorario(true)
                            }}>
                                <Image
                                    style={{ flex: 1, width: undefined, height: undefined, }}
                                    source={{ uri: usuario?.matricula?.horario?.uri }}
                                    resizeMode="contain" />
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View style={{flex: 1, marginTop: 25, alignItems: "center"}}>
                        <Text style={{color: "white", fontSize: 18, textAlign: "center", fontFamily: "Itim_400Regular"}}>{`<< Presiona en la imagen en caso de ser necesario >>`}</Text>
                    </View>
                </View>


            </View></>
    )
}

export default Inicio;