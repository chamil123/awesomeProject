import React, {Component} from 'react';
import {View,Text,StyleSheet,Animated} from 'react-native';
 class LoadingScreen extends Component{
    render(){
        return(
           <View style={style.container}>
               <Text style={style.logoText}>Loadings Screen</Text>
           </View>
        )
    }
}
export default LoadingScreen;

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5257F2',
        justifyContent:'center',
        alignContent:'center',
    },
    logoText:{
        color:'#FFFFFF',
        fontFamily:'GoogleSans-bold',
        fontSize:25,
        marginTop:1,
        fontWeight:'300',
    }
});