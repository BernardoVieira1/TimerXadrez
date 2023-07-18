import { useEffect, useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';




export default function Timer(){

    // const[jogador1,setJogador1] = useState(false)
    // const[jogador2,setJogador2] = useState(false)
    // const [press,setPress] = useState(false)

//999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

const [time1, setTime1] = useState(600);
const [isActive1, setIsActive1] = useState(false);


const minutes = Math.floor(time1 / 60).toString().padStart(2, '0');
const seconds = (time1 % 60).toString().padStart(2, '0');


useEffect(() => {
    let interval = null;
    if (isActive1 && time1 > 0) {
      interval = setInterval(() => {
        setTime1(time => time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive1, time1]);


//999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999

    const[disable1,setdisable1] = useState(false)
    const[disable2,setdisable2] = useState(false)

    const [cor,setCor] = useState("#8A8987");
    const [cor2,setCor2] = useState("#8A8987");

    function Pjogada(){
        // setJogador2(false)
        
        
        setCor("#8A8987")
        setCor2("#7FA751")
        
        setdisable1(true)
        setdisable2(false)

    }
    function Sjogada(){
        // setJogador1(false)
        
        setCor("#7FA751")
        setCor2("#8A8987")
        
        setdisable2(true)
        setdisable1(false)

    }

    function start(){
        Sjogada()

        setIsActive1(!isActive1);
    }

    function reload(){
        setdisable1(false)
        setdisable2(false)
        setCor("#8A8987")
        setCor2("#8A8987")


        setIsActive1(false);
        setTime1(600);
    }

    return(
        <View style={styles.caixa}>
            <TouchableOpacity onPress={Pjogada} disabled={disable1} style={[styles.botao,{backgroundColor: cor}]} >
                <Text style={styles.texto} >{`${minutes}:${seconds}`}</Text> 
            </TouchableOpacity>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={start}>
                        <Ionicons name='play-outline' size={30} color={"#838280"}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={reload}>
                        <Ionicons name='refresh-outline' size={30} color={"#838280"}/>
                    </TouchableOpacity>
                </View>
            <TouchableOpacity onPress={Sjogada} disabled={disable2} style={[styles.botao2,{backgroundColor: cor2}]}>
                <Text style={styles.texto}>10:00</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    caixa:{
        height: "100%",
        width: "100%",
    },
    menu:{
        flex:1,
        flexDirection:'row',
        backgroundColor: "#322E2B",
        height:"10%",
        width: "100%",
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `#8A8987`,
        height:"45%",
        width: "100%"
    },
    botao2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#8A8987",
        transform: [{ rotate: '180deg' }],
        height:"45%",
        width: "100%"
    },
    texto:{
        fontSize: 90,
        fontWeight: 'bold',
    },
  });