import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity, Modal } from "react-native";
import { Camera, CameraCapturedPicture, CameraType } from "expo-camera";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PhotoPreview from "../../components/PhotoPreview";
import { StackTypes } from "../../routes/routes";
import GeminiRequestManager from "../../components/GeminiRequestManager";
import ExpoOcrNbkModule from "../../../modules/expo-ocr-nbk/src/ExpoOcrNbkModule";
import { addChangeListener, ChangeEventPayload } from "../../../modules/expo-ocr-nbk";

let imageURL = "https://cdn.gymaholic.co/motivation/images/7226-this-decision-will-get-you-one-step-closer-or-one.jpg"

const geminiRequestManager = new GeminiRequestManager();

const subscription = addChangeListener((event: ChangeEventPayload) => {
  console.log('Evento de mudança:', event.text);
  AIFormatPackageRequest(event.text)
});

function AIFormatPackageRequest(prompt: string) {
  geminiRequestManager.postGeminiRequest(prompt)
  .then((response) => {
        console.log('Resposta da predição:', response);
      })
      .catch((error) => {
        console.error(error);
      });
}

function CameraScreen() {
  const navigation = useNavigation<StackTypes>();
  const camRef = useRef<Camera | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [capturedPhoto, setCapturedPhoto] = useState<CameraCapturedPicture | undefined>(undefined);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    console.log("aguardando permissão...");
  }

  if (hasPermission === false) {
    console.log("acesso a camera negado");
    return;
  }

  async function takePicture() {
    if(camRef){
      const data = await camRef.current?.takePictureAsync();
      setCapturedPhoto(data);
      setOpen(true);

      ExpoOcrNbkModule.extractTextFromImageBy(imageURL)
    }
  }

  const closeModal = () => {
    setOpen(false);
    setCapturedPhoto(undefined);
  };

  const handleRetakePress = () => {
    console.log("Pressionou o botão 'Tirar novamente'")
    closeModal();
  };

  const handleContinuePress = () => {
    console.log("Pressionou o botão 'Continuar'")
    closeModal();
    subscription.remove()
    // navigation.navigate("RegisteredPackage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Camera
      style={styles.camera} 
      type={CameraType.back}
      ref={camRef} />
      <View style={styles.overlay}></View>
      <View style={styles.button_container}>
        <View style={styles.button_camera}>
          <TouchableOpacity
            style={styles.inner_button_camera}
            onPress={takePicture}
          ></TouchableOpacity>
        </View>
      </View>

      { capturedPhoto?.uri && 
      <PhotoPreview
      visible={open}
      imageUri={capturedPhoto.uri}
      onRequestClose={closeModal}
      onRetakePress={handleRetakePress}
      onContinuePress={handleContinuePress}>
      </PhotoPreview>
      }

    </SafeAreaView>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  button_container: {
    position: "absolute",
    bottom: "15%",
    width: "100%",
    alignItems: "center",
  },
  button_camera: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_button_camera: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 2.5,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "30%",
  }
});
