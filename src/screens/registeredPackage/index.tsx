import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StyledText from "../../components/StyledText";
import { StackTypes } from "../../routes/routes";

function RegisteredPackage() {

  const navigation = useNavigation<StackTypes>();
  
  const goToCameraPage = () => {
    console.log("pressionou botao 'Registrar outro pacote'");
    navigation.navigate("Camera");
  };

  const goToHomePage = () => {
    console.log("pressionou botao 'Home'");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/ic_party.png")}
        style={styles.image}
      />
      <StyledText
        title="Seu pacote foi registrado com sucesso!"
        style={styles.text}
      />
      <TouchableOpacity style={styles.button} onPress={goToCameraPage}>
        <StyledText
          title="Registrar outro pacote"
          style={styles.button_text}
        ></StyledText>
        <View style={styles.icon}>
          <Image
            source={require("../../../assets/images/ic_box_y.png")}
            style={styles.camera_icon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToHomePage}>
        <StyledText
          title="Voltar para Home"
          style={styles.button_text}
        ></StyledText>
        <View style={styles.icon}>
          <Image
            source={require("../../../assets/images/ic_home.png")}
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
    marginBottom: 16,
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

export default RegisteredPackage;
