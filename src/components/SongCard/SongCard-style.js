import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
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
        fontSize:14,
        fontWeight:'700'
    },
    year:{
        fontSize:14,
        color:'darkgrey',
        marginHorizontal:10
    },
    sold_out_container:{
        borderColor:'red',
        borderWidth:1,
        borderRadius:5,
        padding: 5,
    },
    sold_out_title:{
        fontSize:14,
        color:'red',
        fontWeight:'bold'
    },
    info_container:{
        flex:1,
        flexDirection:'row',        
        marginTop:15,
        alignContent:'center',
        justifyContent:'center'
        
    },
    inne_container:{
        margin:20
    }
    
});
