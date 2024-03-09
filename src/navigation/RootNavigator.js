import NetInfo from '@react-native-community/netinfo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  AppState,
  Keyboard,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  ChatScreen,
  ConfirmSeedPhrase,
  GroupsScreen,
  ManualBackupStep,
  SecurityScreen,
  SelectWalletScreen,
  SplashScreen,
  WalletScreen,
  WelcomeScreen,
  SettingScreen,
  CommunityScreen,
  BrowserScreen,
} from '../screens';
import colors from '../theme/colors';
import {navigationRef} from './NavigationUtils';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let commonScreens = {
  GroupsScreen: {
    screen: GroupsScreen,
    navigationOptions: {headerBackTitle: null},
  },
};

const screenOptionsObject =
  Platform.OS == 'android'
    ? {
        presentation: 'card',
        animationTypeForReplace: 'push',
        animation: 'fade_from_bottom',
        headerShown: false,
      }
    : {headerShown: false, drawerType: 'front'};

class RootNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      isNetConnected: true,
    };
    this.currentScreen = null;
    this.routeNameRef = React.createRef();
    this.appStateRef = null;
  }

  async componentDidMount() {
    this.unsubscribe = NetInfo?.addEventListener(state => {
      this.internetChecker(state?.isConnected);
    });
  }

  componentWillUnmount() {
    this.unregisterAppStateEvent();
  }

  componentDidUpdate(prevProps, prevState) {
    const {isNetAvailable} = this.props;
    if (prevProps.isNetAvailable !== isNetAvailable) {
      this.connectivityChange(isNetAvailable);
    }
  }

  internetChecker = isConnected => {
    this.connectivityChange(isConnected);
  };

  connectivityChange = isConnected => {
    if (!isConnected) Keyboard.dismiss();
    if (isConnected) {
    }
    // setIsNetAvailableForApi(isConnected);
    this.setState({isNetConnected: isConnected});
  };

  recheckConnectivity = () => {
    NetInfo.fetch().then(state => {
      this.internetChecker(state?.isConnected);
    });
  };

  registerAppStateEvent() {
    this.appStateRef = AppState.addEventListener(
      'change',
      this._handleAppStateChange,
    );
  }

  unregisterAppStateEvent() {
    this.unsubscribe?.remove?.();
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // console.log('nextAppState---------1', nextAppState);
    } else {
      // console.log('nextAppState---------', nextAppState);
    }
    this.setState({appState: nextAppState});
  };

  onNavigationStateChange = e => {
    const currentRouteName = navigationRef.current.getCurrentRoute().name;
    this.currentScreen = currentRouteName ? {...currentRouteName} : null;
    console.log(`@@@current_screen:${currentRouteName}`);
    this.routeNameRef.current = currentRouteName;
  };

  getStackFromJSON = object => {
    return (
      <>
        {Object.keys(object).map((key, index) => {
          console.log({index});
          return (
            key !== 'initialRouteName' && (
              <>
                <Stack.Screen
                  key={`${index}`}
                  name={key}
                  component={object[key]?.screen}
                  options={{
                    gestureEnabled:
                      object[key]?.navigationOptions?.gesturesEnabled !== false,
                    headerShown: false,
                  }}
                />
              </>
            )
          );
        })}
      </>
    );
  };

  RootStackPool = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionsObject}>
        <Stack.Screen name={'Screen2'} component={Screen2} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };

  RootHomeStackPool = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionsObject}>
        <Stack.Screen name={'Home'} component={ChatScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };

  ChatFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={'ChatView'}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={'ChatView'} component={ChatScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  CommunityFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={'CommunityView'}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={'CommunityView'} component={CommunityScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  WalletTabFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={'WalletView'}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={'WalletView'} component={WalletScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  BrowserFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={'BrowserView'}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={'BrowserView'} component={BrowserScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  SettingsFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={'SettingsView'}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={'SettingsView'} component={SettingScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };

  DefaultNavigation = () => {
    const {colors} = useTheme();
    return (
      <Tab.Navigator
        screenOptions={props => {
          return {
            tabBarInactiveTintColor: '#008abc',
            headerShown: false,
            tabBarActiveTintColor: '#0c3471',
            tabBarLabelPosition: 'below-icon',
            tabBarIconStyle: {paddingBottom: 5},
            tabBarStyle: {
              backgroundColor: colors.black,
            },
          };
        }}>
        <Tab.Screen name="ChatTabHome" component={this.ChatFlow} />
        <Tab.Screen name="CommunityTab" component={this.CommunityFlow} />
        <Tab.Screen name="WalletTab" component={this.WalletTabFlow} />
        <Tab.Screen name="BrowserTab" component={this.BrowserFlow} />
        <Tab.Screen name="SettingsTab" component={this.SettingsFlow} />
      </Tab.Navigator>
    );
  };

  drawerStackNavigation = () => {};

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: this.props.isDarkTheme
            ? colors.dark.colors.primaryBg
            : colors.light.colors.primaryBg,
        }}>
        <StatusBar
          barStyle={this.props.isDarkTheme ? 'light-content' : 'dark-content'}
          backgroundColor={
            this.props.isDarkTheme
              ? colors.dark.colors.primaryBg
              : colors.light.colors.primaryBg
          }
        />
        <View style={{flex: 1}}>
          <NavigationContainer
            ref={navigationRef}
            theme={this.props?.isDarkTheme ? colors?.dark : colors?.light}
            onReady={() => {
              this.routeNameRef.current =
                navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={this.onNavigationStateChange}>
            <Stack.Navigator
              key={123}
              // screenOptions={{
              //   headerShown: false,
              //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              // }}
              screenOptions={screenOptionsObject}>
              <Stack.Screen
                name={'SplashScreen'}
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'WelcomeScreen'}
                component={WelcomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'SecurityScreen'}
                component={SecurityScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'SelectWalletScreen'}
                component={SelectWalletScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'ManualBackupStep'}
                component={ManualBackupStep}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'ConfirmSeedPhrase'}
                component={ConfirmSeedPhrase}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={'HomeScreen'}
                component={this.DefaultNavigation}
                options={{headerShown: false}}
              />
              {this.getStackFromJSON(commonScreens)}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    );
  }
}

const mapActionCreators = {};
const mapStateToProps = state => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    isLoading: state.global.loading,
    isDarkTheme: state.global.isDarkTheme,
  };
};
export default connect(mapStateToProps, mapActionCreators)(RootNavigator);
