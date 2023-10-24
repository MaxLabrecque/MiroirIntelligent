import { useContext } from "react";
import { Switch, Text, View } from "react-native";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";
import useModal from "miroirPackage/Hooks/UseModal";

export default function TimeMode() {
  const {is12h} = useContext(ConfigContext);
  const {updateTimeMode} = useModal();

  return (
    <View className="flex-row justify-between items-center m-5">
      <Text className="text-lg text-light_blue">Affichage de l'heure: 12h</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={updateTimeMode}
        value={is12h} />
    </View>
  );
};
