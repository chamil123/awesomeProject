import React, {Component} from 'react';
import {View,Text,StyleSheet,Animated} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
 class LoadingScreen extends Component{
    render(){
        return(
           <View style={style.container}>
               <View style={style.textfields}>
                   <TextInput style={style.input}>
                       placeholder="username"
                       returnKeyType="next"
                       onSubmitEditing={()=>this.passwordInput.focus()}

                   </TextInput>

               </View>
              
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
    },
    input:{
        paddingLeft:20,
        borderRadius:50,
        height:50,
        fontSize:25,
        backgroundColor:'white',
        borderColor:'#1abc9c',
        borderWidth:1,
        marginBottom:20,
        color:'#34495e'
    }
});