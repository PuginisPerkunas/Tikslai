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

export default class PridetiScreen extends Component{

    static navigationOptions = {
        alignItems : 'center',
        title : 'Uzduotys',
        drawerLabel: 'Prideti uzduoti',
        drawerIcon: ({ tintColor }) => (
            <Icon
            name='plus'
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
                    <Text> prideti </Text>
                    </View>

             </SafeAreaView>
            </ScrollView>//scrollView done
        );//return done
    }//render done

}//class done

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });//styles done