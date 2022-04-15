import {createTheme,responsiveFontSizes}from '@material-ui/core/styles';
import pallet from './pallet';

const theme = createTheme({
    direction: 'rtl',
    pallet:pallet,
    spacing:2,
    typography:{
      allVariants:{
        fontFamily:"IRANSans"
      },
      h1:{
        fontSize:35,
        fontWeight:'bold'
      },
      h2:{
        fontSize:31,
        fontWeight:'bold'
      },
      h3:{
        fontSize:27,
        fontWeight:500
      },
      h4:{
        fontSize:23,
        fontWeight:500
      },
      h5:{
        fontSize:19,
        fontWeight:'bold'
      },
      h6:{
        fontSize:15,
        fontWeight:'bold'
      },
      body1:{
        fontSize:16,
        fontWeight:300
      },
      body2:{
        fontSize:14,
        fontWeight:300
      },
      subtitle1:{
        fontSize:22,
        fontWeight:500
      },
      subtitle2:{
        fontSize:14,
        fontWeight:'bold'
      },
      caption:{
        fontSize:12,
        fontWeight:200
      },  
      button:{
        fontSize:15,
        fontWeight:'bold'
      },
      overline:{
        fontSize:13,
        fontWeight:500,
        textDecoration:'line-through'
      }
    }
  });

export default responsiveFontSizes(theme)