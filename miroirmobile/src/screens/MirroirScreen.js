import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppTheme from '../styles/AppTheme';
import Hour from '../components/datetime/Hour';
import Calendar from '../components/datetime/Calendar';
import useDateTime from 'miroirPackage/Hooks/UseDateTime'

export default function MirroirScreen() {

  const {date} = useDateTime();
  return (
    <View style={styles.background} className="flex-1 flex-row justify-center items-center" >
      <Hour className="flex-2" date={date}/>
      <Calendar className="flex-2" date={date}/>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: AppTheme.backColor,
  },
});
