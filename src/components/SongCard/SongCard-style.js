import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        borderBottomColor:'darkgray',
        borderBottomWidth:1,
        padding:20 ,
        flexDirection:'row'
    },
    image:{
        height:100 ,
        width:100,
        borderRadius:50,
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    artist:{
        fontSize:16,
        fontWeight:'700'
    },
    year:{
        fontSize:14,
        color:'darkgrey',
    },
    sold_out:{
        fontSize:14,
        color:'red',
        fontWeight:'bold'
    },
    info_container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    inne_container:{
        margin:20
    }
    
});
