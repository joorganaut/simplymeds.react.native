import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Tile } from 'react-native-elements';
import { theme } from '../core/theme';
import { Portal } from 'react-native-paper';

class HintBox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return( <>
           <View style={styles.fieldSet}>
    <Text style={styles.legend}>tip</Text>
    <Text style={styles.message}>''{this.props.message}''</Text>
    <Text style={styles.footer}>{this.props.hint}</Text>
</View>
            </>)
    }   
};
const styles = StyleSheet.create({
    fieldSet:{
        margin: 15,
        marginTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 15,
        borderRadius: 5,
        borderWidth: 2,
        // height : 200,
        width: '100%',
        alignItems: 'center',
        borderColor: theme.colors.brand,
        backgroundColor: 'white',
    },
    icon: {
        transform: [{ rotate: '180deg'}],
        width: 25,
        height: 25,
        position: 'absolute',
        left: 2, // Keep some space between your left border and Image
      },
    message:{
        fontStyle : 'italic',
        fontSize : 15,
        flexWrap : 'wrap',
        fontFamily: 'Garamond Medium Italic',
        color : theme.colors.secondary
    },
    legend:{
        position: 'absolute',
        top: -10,
        left: 10,
        fontWeight: 'bold',    
        backgroundColor: 'white',

    }
    ,
    footer:{
        position: 'absolute',
        bottom: -10,
        right: 10,
        fontWeight: 'bold',    
        backgroundColor: 'white',
        fontStyle : 'italic',
    }
});

export default HintBox;
