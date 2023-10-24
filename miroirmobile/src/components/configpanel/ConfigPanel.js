import { View } from "react-native";
import TimeMode from "./TimeMode";
import Timezone from "./Timezones";
import NightMode from "./NightMode";
import IdleMode from "./IdleMode";


export default function ConfigPanel() {

  return (
    <View className="h-full bg-nord_black">
      <TimeMode/>
      <Timezone/>
      <NightMode/>
      <IdleMode/>
    </View>
  );
}
