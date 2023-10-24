import { StyleSheet, Text, View } from "react-native";
import AppTheme from "../../styles/AppTheme";


export default function Calendar(props) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const date = props.date.getDate();
  const dayOfTheWeek = days[props.date.getDay()];
  const month = props.date.getMonth() + 1;
  const year = props.date.getFullYear();

  return (
    <View style={styles.shadow} className="border-light_blue border-2">
      <View className="p-4 flex flex-col items-center">
        <Text className="text-3xl text-light_blue">{dayOfTheWeek}</Text>
        <Text className="text-2xl text-light_blue">{date}</Text>
        <Text className="text-2xl text-light_blue">{month}</Text>
        <Text className="text-1xl text-light_blue">{year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: AppTheme.backgroundColor,
  },
});
