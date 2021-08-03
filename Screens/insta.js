import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.instagram}>Instagram</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    instagram:{
    color:'red',
    fontFamily:'French Script MT',
    fontSize:50
}
})

