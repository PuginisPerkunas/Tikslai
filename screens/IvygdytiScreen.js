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
  Image,
  Animated
} from 'react-native';

export default class IvygdytiScreen extends Component{

    static navigationOptions = {
        alignItems : 'center',
        title : 'Uzduotys',
        drawerLabel: 'Ivygdytos uzduotys',
        drawerIcon: ({ tintColor }) => (
            <Icon
            name='check'
            type='evilicon'
            color='#ffffff'
          />
        ),//icon END
    };//drawer navigation options END

    constructor()
    {
      super() 
      this.springValue = new Animated.Value(0.3)      
      this.state = {
        list: ''
      }
      try {
        AsyncStorage.getItem('ToDB').then((value) => {
          this.setState({
            list: JSON.parse(value)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }//constructor END

    spring () {
        this.springValue.setValue(0.3)
        Animated.spring(
          this.springValue,
          {
            toValue: 1,
            friction: 1,
            tension: 1
          }
        ).start()
      }

    componentDidMount () {
        this.spring()
    }//componentDidMount function END

    parseData(){
     if(this.state.list){
     return this.state.list.map((data , i) => {
         if(data.checked == true){
        return (
         <Animated.View 
             style={[styles.dataList, {transform: [{scale: this.springValue}]}]}
             key={i}>
            <Text style={styles.Banners} >Uzduoties pavadinimas:</Text>
            <Text style={styles.dataText}>{data.pavadinimas} </Text>
            <Text style={styles.Banners} >Uzduoties aprasymas:</Text>
            <Text style={styles.dataText}>{data.uzduotis}</Text>
            <Text style={styles.Banners} >Uzduotis IVYGDYTA</Text>
         </Animated.View>
            )}
        })
      }
    } 

    render(){
        const {navigate} = this.props.navigation;
        return(
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
             <Text style={styles.title }>IVYGDYTOS UZDUOTYS</Text>
              <ScrollView>
                {this.parseData()}
              </ScrollView>
           
              <TouchableHighlight
               style={styles.button}
               onPress={() => navigate('PridetiScreen')}
               underlayColor='white'>
                <Text style={styles.buttonText}>NAUJA UZDUOTIS</Text>
              </TouchableHighlight>
             <Text></Text>
            </SafeAreaView>
        );//return END
    }//render END

}//class END

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: 24,
      backgroundColor: '#41c666',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      paddingTop:5,
      color: '#ffffff',
      fontSize: 26,
      paddingBottom: 10,
      fontWeight: 'bold',
      fontFamily: 'monospace'
    },
    button: {
     height: 65,
     flexDirection: 'row',
     backgroundColor: '#74ff70',
     borderColor: '#e8e8e8',
     borderWidth: 1,
     borderRadius: 8,
     marginBottom: 5,
     marginTop: 10,
     alignSelf: 'stretch',
     justifyContent: 'center'
   },
    dataList : {
    width : 360,
    marginTop: 5,
    marginBottom: 5,
    //borderWidth: 2,
    //borderRadius: 10,
    //borderColor: '#bababa',
    backgroundColor: '#41c697'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center',
      fontFamily: 'monospace'
    },
    Banners: {
      paddingBottom: 5,
      paddingTop: 5,
      color: '#F0FFF0',
      fontSize: 18,
      alignSelf: 'center'
    },
    dataText: {
      fontSize: 14,
      alignSelf: 'center',
      color: '#ffffff',
      paddingBottom: 5
    }
  });//styles END