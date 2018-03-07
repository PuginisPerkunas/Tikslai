import React, {Component} from 'react';
import {NavigationActions, SafeAreaView} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import { CheckBox, Button, SearchBar, Icon } from 'react-native-elements';

class SideMenu extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View >
        <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
          <View>
            <View >
            </View>
          </View>
          <View>
            <Text >
              Section 2
            </Text>
            <View >
              <Text  onPress={this.navigateToScreen('IvygdytiScreen')}>
              IvygdytiScreen
              </Text>
              <Text  onPress={this.navigateToScreen('NeigyvendintiScreen')}>
              NeigyvendintiScreen
              </Text>
            </View>
          </View>
          </SafeAreaView>
        </ScrollView>
        <View >
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    pridetiButton: {
        color:'#ffffff', 
        fontSize:32
    }
  });//styles done

export default SideMenu;