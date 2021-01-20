import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import get from 'lodash.get';

import ReportIcon from 'assets/icons/dashboard.png';
import {SplashScreen} from 'features/Splash';
import {LoginScreen} from 'features/Login';
import {SignupScreen} from 'features/Signup';
import {AccountsScreen} from 'features/Accounts';
import {TransactionsScreen} from 'features/Transactions';
import {TransactionScreen} from 'features/Transaction';
import {ReportScreen} from 'features/Report';

import {AppStateContext} from './contexts';

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const AppScreens = (props) => {
  const [transactionIds, setTransactionIds] = useState([]);

  return (
    <AppStateContext.Provider value={{transactionIds, setTransactionIds}}>
      <AppStack.Navigator>
        <AppStack.Screen name="Accounts" component={AccountsScreen} />
        <AppStack.Screen name="Report" component={ReportScreen} />
        <AppStack.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{
            headerRight: () => {
              const index = get(props, 'route.state.index');
              const currentRoute = get(props, `route.state.routes[${index}]`);

              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('Report', currentRoute.params)
                  }>
                  <Image
                    source={ReportIcon}
                    style={{width: 28, height: 28, marginRight: 16}}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          name="Transaction"
          component={TransactionScreen}
        />
      </AppStack.Navigator>
    </AppStateContext.Provider>
  );
};

const Navigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Splash" component={SplashScreen} />
      <MainStack.Screen name="App" component={AppScreens} />
      <MainStack.Screen name="Auth" component={AuthScreens} />
    </MainStack.Navigator>
  );
};

export default Navigator;
