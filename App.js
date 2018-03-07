import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import PridetiScreen from './screens/PridetiScreen';
import IvygdytiScreen from './screens/IvygdytiScreen';
import NeigyvendintiScreen from './screens/NeigyvendintiScreen';
import SideMenu from './sideMenu/SideMenu';

const TiksluApp = DrawerNavigator ({
      PridetiScreen: {screen : PridetiScreen},
      IvygdytiScreen: {screen : IvygdytiScreen},
      NeigyvendintiScreen: {screen : NeigyvendintiScreen},
  },//screens section 
  {
    title : 'Uzduotys',
    drawerWidth: 400,
    drawerBackgroundColor: '#8cffcf'
  }//drawer propertys END
);//drawer END

export default class App extends React.Component {
  render() {
    return (
        <TiksluApp/>
    );//return END
  }//render END
}//class END

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});//styles END
