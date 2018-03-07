import React, { Component } from 'react';
import { CheckBox, Button, SearchBar, Icon } from 'react-native-elements';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kaede,Hoshi,Jiro,Isao,Madoka,Akira,Hideo,Kohana,Makiko,Sae,Fumi,} from 'react-native-textinput-effects';
import {
    Alert,
    Animated,
    Easing,
    Dimensions,
    AppRegistry,
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

const { width } = Dimensions.get('window') // for screen dimension

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

    constructor(props) {
        super(props);
        this.animatedValue1 = new Animated.Value(0)
        this.animatedValue2 = new Animated.Value(0)
        this.animatedValue3 = new Animated.Value(0)
        this.state = {
            pavadinimas: '',
            uzduotis: '',
            checked: false,
            blank: '',
            
        };//state END
      }//constructor END

      componentDidMount () {
        this.animate()
      }//componentDidMount function END

      animate () {
        this.animatedValue1.setValue(0)
        this.animatedValue2.setValue(0)
        this.animatedValue3.setValue(0)
        const createAnimation = function (value, duration, easing, delay = 0) {
          return Animated.timing(
           value,
            {
              toValue: 1,
              duration,
              easing,
              delay
            }
          )
        }
        Animated.parallel([
          createAnimation(this.animatedValue1, 2000, Easing.ease),
          createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
          createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start()
      }//animate function END

      //CHANGE FUNKCIONS
      changePavadinimas(pavadinimas)
      {
        this.setState({pavadinimas})
      }
      changeUzduotis(uzduotis)
      {
        this.setState({uzduotis})
      }
      changeChecked(checked){
          this.setState({checked})
      }
      pressCheckBox = () => {
        this.setState((state) => ({
            checked: !state.checked
        }));
      }
      //CHANGE FUNKCIONS END

      

      buttonPressed(){
        const array = [];
        const {navigate} = this.props.navigation;
        if(this.state.pavadinimas && this.state.uzduotis)
           {
            const dataSend = {
            pavadinimas : this.state.pavadinimas,
            uzduotis : this.state.uzduotis,
            checked : this.state.checked
            }
            array.push(dataSend);
            try {
            AsyncStorage.getItem('ToDB').then((value) => {
            if(value !== null){
                const d = JSON.parse(value);
                d.push(dataSend)
                AsyncStorage.setItem('ToDB', JSON.stringify(d)).then(()=>{
                this.props.navigator.push({
                title: 'Skelbimai',
                 component: SkelbimoScreen 
                })
                })
                Alert.alert(
                    'Prideta!',
                    'Uzduotis pavadinimu: ' + '"'+ dataSend.pavadinimas + '"' + ' sekmingai prideta',
                    [
                      {text: 'OK', onPress: () => navigate('SkelbimoScreen')},
                    ],
                    { cancelable: false }
                  )
            } else {
                AsyncStorage.setItem('DB_form', JSON.stringify(array)).then(()=>{
                this.props.navigator.push({
                title: 'Skelbimai',
                component: SkelbimoScreen 
                })
                })
                Alert.alert(
                    'Prideta!',
                    'Uzduotis pavadinimu: ' + '"'+ dataSend.pavadinimas + '"' + ' sekmingai prideta',
                    [
                        {text: 'OK', onPress: () => navigate('SkelbimoScreen')},
                    ],
                    { cancelable: false }
                  )
              }
            })
            } catch (error) {
            console.log(error)
            }
        } else {
         Alert.alert('Uzpildykite visus laukus!')
       }
    }//buttonPressed function END

    buttonClean(){
        this.changePavadinimas('')
        this.changeUzduotis('')
      }//buttonClean() END

    render(){
        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1]
          })
          const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
          })
          const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-900, 20]
          })
        return(
            <ScrollView style={{backgroundColor: '#7fd6ff'}}>
             <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>

                <Animated.View style={{ flex: 1, alignItems: 'center',  transform: [{scale: scaleText}] }}>
                    <Text style={styles.header}> PRIDEKITE NAUJA UZDUOTI </Text>
                </Animated.View>

                <Animated.View style={[styles.card2, { backgroundColor: '#82eaff', top: introButton }]}>
                <Text style={styles.title}>Irasykite savo tiksla cia</Text>
                <Fumi
                  label={'Uzduoties pavadinimas'}
                  labelStyle={{ color: '#a3a3a3' }}
                  inputStyle={{ color: '#f95a25' }}
                  iconClass={FontAwesomeIcon}
                  iconName={'pencil'}
                  iconColor={'#f95a25'}
                  iconSize={15}
                  value={this.state.pavadinimas}
                  onChangeText={(pavadinimas) => this.changePavadinimas(pavadinimas)}
                />
                <Fumi
                  style={styles.input}
                  label={'Uzduotis'}
                  iconClass={FontAwesomeIcon}
                  iconName={'sticky-note'}
                  iconColor={'#77116a'}
                  value={this.state.uzduotis}
                  onChangeText={(uzduotis)=> this.changeUzduotis(uzduotis)}
                />
                <CheckBox
                  title='Uzduotis ivygdyta'
                  onPress={this.pressCheckBox}
                  center
                  checkedIcon='dot-circle-o'
                  uncheckedIcon='circle-o'
                  checked={this.state.checked}
                /> 
                <TouchableHighlight
                 style={styles.button}
                 onPress={() => this.buttonPressed()}
                 underlayColor='white'>
                     <Text style={styles.buttonText}>ISSAUGOTI</Text>
                </TouchableHighlight>

                <TouchableHighlight
                 style={styles.buttonNext}
                 onPress={() => this.buttonClean()}
                 underlayColor='white'>
                    <Text style={styles.buttonText}>ISVALYTI</Text>
                </TouchableHighlight>    
              </Animated.View>

             </SafeAreaView>
            </ScrollView>//scrollView END
        );//return END
    }//render END

}//class END

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 14,
    },
    header:{
        fontSize: 32,
        color: '#ffffff',
        fontFamily: 'monospace',
        textAlign: 'center',
        paddingBottom: 10
    },
    content: {
        paddingBottom: 300,
      },
      card1: {
        paddingVertical: 16,
      },
      card2: {
        padding: 16,
        paddingBottom: 80
      },
      input: {
        marginTop: 4,
        paddingBottom: 20
      },
      title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
      },
      buttonText: {
        fontSize: 24,
        color: '#ffffff',
        alignSelf: 'center'
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
      buttonNext: {
        height: 65,
        flexDirection: 'row',
        backgroundColor: '#ff6060',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
  });//styles END