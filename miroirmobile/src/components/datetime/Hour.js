import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";
import { useContext } from "react";
import { ConfigContext } from "miroirPackage/Contexts/ConfigContext";


export default function Hour(props) {
  const {is12h} = useContext(ConfigContext)
  const hours = is12h ? props.date.getHours() % 12 || 12 : props.date.getHours()
  const minutes=  props.date.getMinutes()
  const seconds=  props.date.getSeconds()

  return (
    <View style={styles.shadow}>
      <Text className="text-2xl text-light_blue">
        {hours < 10 ? '0' : ''}
        {hours}
      </Text>

      <Text className="text-2xl text-light_blue">
        {minutes < 10 ? '0': ''}
        {minutes}
      </Text>

      <Text className="text-2xl text-light_blue">
        {seconds < 10 ? '0': ''}
        {seconds}
      </Text>
      <Text className="text-1xl text-light_blue">{is12h ? hours < 12 ? 'AM' : 'PM' : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: AppTheme.backgroundColor,
    paddingRight: 30,
  },
});
