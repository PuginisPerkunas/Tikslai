import React, { Component } from 'react';
import { CheckBox, Button, SearchBar, Icon } from 'react-native-elements';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {
    Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

export default class NeigyvendintiScreen extends Component{

    static navigationOptions = {
        alignItems : 'center',
        title : 'Uzduotys',
        drawerLabel: 'Neivygdytos uzduotys',
        drawerIcon: ({ tintColor }) => (
            <Icon
            name='clock'
            type='evilicon'
            color='#ffffff'
          />
        ),//icon close
    };//drawer navigation options

    render(){
        return(
            <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text> neivygdyti </Text>
            </View>
            </SafeAreaView>
            </ScrollView>
        );//return done
    }//render done

}//class done

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });//styles done