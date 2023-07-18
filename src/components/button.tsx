import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tempo() {
  const [time, setTime] = useState(600); // tempo inicial é de 10 minutos (10 * 60 = 600 segundos)
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setIsActive(false);
    setTime(600);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{`${minutes}:${seconds}`}</Text>
      <View style={styles.buttonsContainer}>




        <TouchableOpacity onPress={toggle} style={[styles.button, styles.startButton]}>
          <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={reset} style={[styles.button, styles.reloadButton]}>
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>









        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#0f0',
  },
  reloadButton: {
    backgroundColor: '#f00',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});



// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Tempo() {
//   const [timeLeft, setTimeLeft] = useState(600); // 600 segundos = 10 minutos

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(timeLeft => timeLeft - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timer}>
//         {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   timer: {
//     fontSize: 50,
//     fontWeight: 'bold',
//   },
// });






// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const Tempo = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);

//   const handleStart = () => {
//     setIsActive(true);
//   };

//   const handlePause = () => {
//     setIsActive(false);
//   };

//   const handleReset = () => {
//     setSeconds(0);
//     setIsActive(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timer}>{seconds}</Text>
//       <View style={styles.buttonsContainer}>
//         <TouchableOpacity
//           style={[styles.button, styles.startButton]}
//           onPress={handleStart}
//         >
//           <Text style={styles.buttonText}>Start</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.pauseButton]}
//           onPress={handlePause}
//         >
//           <Text style={styles.buttonText}>Pause</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.resetButton]}
//           onPress={handleReset}
//         >
//           <Text style={styles.buttonText}>Reset</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   timer: {
//     fontSize: 60,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   startButton: {
//     backgroundColor: 'green',
//   },
//   pauseButton: {
//     backgroundColor: 'orange',
//   },
//   resetButton: {
//     backgroundColor: 'red',
//   },
//   buttonText: {
//     color: '#fff',
//   },
// });

// export default Tempo;
