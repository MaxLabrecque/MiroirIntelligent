import { useEffect, useContext } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import useModal from "miroirPackage/Hooks/UseModal";


export default function IdleMode() {
  const {brightnessIdle} = useContext(ConfigContext);
  const {updatebrightnessIdle} = useModal();

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-row justify-between items-center m-5">
          <Text className="text-lg text-light_blue">Temps mode inactif:</Text>
          <TextInput
            className="bg-white p-3 w-1/3 rounded-lg border-light_blue border-2"
            onChangeText={updatebrightnessIdle}
            value={brightnessIdle}
            placeholder="Idle timer"
            keyboardType="numeric"
          />
        </View>
    </TouchableWithoutFeedback>
  );
}
