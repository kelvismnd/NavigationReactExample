import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ListaEstados } from "../components/ListaEstados";



export function Home(){

const nav = useNavigation();
    
function handleToHome(){
    nav.navigate('Home');     
}

function handleToAbout(){
    nav.navigate('About');     
}

    return (  
          <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={ handleToHome }>
                <Text style={styles.legendaBtn}> Home Page</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={ handleToAbout }>
                <Text style={styles.legendaBtn}> About Page</Text>
            </TouchableOpacity>
          </View>
    );
}


const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#045',
        marginBottom:20,
        height:40,
        justifyContent:'center',
        paddingHorizontal:20,
        borderRadius:5,
        

    },
    legendaBtn:{
        color:'#fff',
        fontSize:15,
        elevation:9,
    }
    ,
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})