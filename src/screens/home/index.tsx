import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StyledText from "../../components/StyledText";
import { StackTypes } from "../../routes/routes";
import ExpoOcrNbkModule from "../../../modules/expo-ocr-nbk/src/ExpoOcrNbkModule";

function Home() {

  const navigation = useNavigation<StackTypes>();
  
  const cameraButtonAction = () => {
    console.log("pressionou botao da camera");
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.container}>
      <StyledText
        // title='Toque no botão "Acionar Câmera" e aponte a câmera traseira do seu celular para a parte superior do pacote, onde estão as informações necessárias para o reconhecimento.'
        title={ExpoOcrNbkModule.hello()}
        style={styles.text}
      />
      <Image
        source={require("../../../assets/images/box-camera-frame.png")}
        style={styles.image}
      />
      <StyledText
        title="Quando encontrar um bom enquadramento tire uma foto e aguarde a validação."
        style={styles.text}
      />
      <TouchableOpacity style={styles.button} onPress={cameraButtonAction}>
        <StyledText
          title="ACIONAR CÂMERA"
          style={styles.button_text}
        ></StyledText>
        <View style={styles.icon}>
          <Image
            source={require("../../../assets/images/ic_camera.png")}
            style={styles.camera_icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontFamily: "SFProDisplay-Regular",
    textAlign: "center",
    fontSize: 18,
    color: "#2D0C57",
    marginBottom: 32,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 32,
  },
  button: {
    height: 48,
    width: "100%",
    backgroundColor: "#7203FF",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
    marginTop: 16,
  },
  button_text: {
    color: "white",
    fontFamily: "SFProDisplay-Bold",
    fontSize: 15,
    marginLeft: 8,
  },
  icon: {
    marginLeft: 8,
  },
  camera_icon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default Home;
