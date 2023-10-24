import { useContext, useEffect, useState } from "react";
import {Text, View } from "react-native";
import useModal from "miroirPackage/Hooks/UseModal";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import Slider from "@react-native-community/slider";

export default function NightMode() {
  const { brightnessTimeStart, brightnessTimeEnd } = useContext(ConfigContext);
  const { updateValueSliderStart, updateValueSliderEnd } = useModal();

  const [timeStartValue, setTimeStart] = useState(brightnessTimeStart);
  const [timeEndValue, setTimeEnd] = useState(brightnessTimeEnd);

  useEffect(() => {
    setTimeStart(brightnessTimeStart);
    setTimeEnd(brightnessTimeEnd);
  }, [brightnessTimeStart, brightnessTimeEnd])

  return (
    <View>
      <Text className="text-lg text-light_blue m-5">Heure mode nuit &#40; Kiosk seulement &#41;</Text>
      <View className="flex-row justify-between items-center mx-5 mb-5">
        <Text className="text-lg text-light_blue">Début:</Text>
        <Text className="text-lg text-light_blue">{timeStartValue}</Text>
        <Slider
          style={{ width: '70%' }}
          onValueChange={e => setTimeStart(Math.round(e * 100))}
          onSlidingComplete={e => updateValueSliderStart(Math.round(e * 100))}
          minimumValue={0}
          maximumValue={0.24}
          value={brightnessTimeStart / 100}
        />
      </View>
      <View className="flex-row justify-between items-center m-5">
        <Text className="text-lg text-light_blue">Fin:</Text>
        <Text className="text-lg text-light_blue">{timeEndValue}</Text>
        <Slider
          style={{ width: '70%' }}
          onValueChange={e => setTimeEnd(Math.round(e * 100))}
          onSlidingComplete={e => updateValueSliderEnd(Math.round(e * 100))}
          minimumValue={0}
          maximumValue={0.24}
          value={brightnessTimeEnd / 100}
        />
      </View>
    </View >
  );
}
