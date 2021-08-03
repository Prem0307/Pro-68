import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.facebook}>Facebook</Text>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    facebook:{
    color:'blue',
    fontFamily:'French Script MT',
    fontSize:50
}
})

