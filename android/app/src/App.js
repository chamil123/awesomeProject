import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';

import LoadingScreen from './screens/LoadingScreen';
import AuthScreen from './screens/AuthScreen';
 class App extends Component{
    render(){
        return(
          <Router>
              <Scene key="root">
                 
                  <Scene key="loading" component={LoadingScreen} initial={true} ></Scene>
                  <Scene key="auth" component={AuthScreen}></Scene>
              </Scene>

          </Router>

        );
    }
}
export default App;