import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/pages/Timer';
import Tempo from './src/components/button';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      {/* <Tempo/> */}

      <Timer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// import React, { useState } from 'react';
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
// import CountDown from 'react-native-countdown-component';

// export default function App() {
//   const [playerOne, setPlayerOne] = useState(true);
//   const [playerTwo, setPlayerTwo] = useState(false);

//   const switchTurn = () => {
//     setPlayerOne(!playerOne);
//     setPlayerTwo(!playerTwo);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.timerContainer}>
//         <Text style={styles.timerText}>Jogador 1</Text>
//         <CountDown
//           until={10}
//           size={30}
//           onFinish={switchTurn}
//           digitStyle={{ backgroundColor: '#FFF' }}
//           digitTxtStyle={{ color: '#1CC625' }}
//           timeToShow={['M', 'S']}
//           timeLabels={{ m: '', s: '' }}
//         />
//       </View>
//       <View style={styles.timerContainer}>
//         <Text style={styles.timerText}>Jogador 2</Text>
//         <CountDown
//           until={10}
//           size={30}
//           onFinish={switchTurn}
//           digitStyle={{ backgroundColor: '#FFF' }}
//           digitTxtStyle={{ color: '#1CC625' }}
//           timeToShow={['M', 'S']}
//           timeLabels={{ m: '', s: '' }}
//         />
//       </View>
//       <TouchableOpacity style={styles.switchButton} onPress={switchTurn}>
//         <Text style={styles.switchButtonText}>
//           {playerOne ? 'Vez do jogador 1' : 'Vez do jogador 2'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   timerContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   timerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   switchButton: {
//     backgroundColor: '#1CC625',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginVertical: 20,
//   },
//   switchButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });