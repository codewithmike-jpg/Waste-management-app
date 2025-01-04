// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Notifications from './screens/Notifications';
import Feedback from './screens/Feedback';
// import TabNavigator from './components/TabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TabNavigator/> */}
      <Notifications/>
      {/* <Feedback/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
