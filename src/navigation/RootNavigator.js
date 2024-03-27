/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
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
  StyleSheet,
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
  ChatViewScreen,
  ImportWallet,
  SelectCoinScreen,
  NotificationScreen,
  PrivacySecurity,
  PrivacyView,
  NotificationPreferenceView,
  NotificationView,
  CreatePassword,
  VerifyPassword,
  ManageTokenScreen,
} from '../screens';
import colors from '../theme/colors';
import {navigationRef} from './NavigationUtils';
import {useTheme} from '@react-navigation/native';
import theme from '../theme';
import CustomIcon from '../components/CustomIcon';
import Routes from './Routes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let commonScreens = {
  GroupsScreen: {
    name: Routes.GROUP_VIEW,
    screen: GroupsScreen,
    navigationOptions: {headerBackTitle: null},
  },
  SelectCoinScreen: {
    name: Routes.SELECT_COIN,
    screen: SelectCoinScreen,
    navigationOptions: {headerBackTitle: null},
  },
  PrivacySecurity: {
    name: Routes.SETTINGS.PRIVACY_SECURITY,
    screen: PrivacySecurity,
    navigationOptions: {headerBackTitle: null},
  },
  PrivacyView: {
    name: Routes.SETTINGS.PRIVACY,
    screen: PrivacyView,
    navigationOptions: {headerBackTitle: null},
  },
  NotificationPreferenceView: {
    name: Routes.SETTINGS.NOTIFICATION_PREFERENCES,
    screen: NotificationPreferenceView,
    navigationOptions: {headerBackTitle: null},
  },
  NotificationView: {
    name: Routes.SETTINGS.NOTIFICATIONS,
    screen: NotificationView,
    navigationOptions: {headerBackTitle: null},
  },
  ManageTokenScreen: {
    name: Routes.MANAGE_TOKEN_VIEW,
    screen: ManageTokenScreen,
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
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }
    : {
        headerShown: false,
        drawerType: 'front',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      };

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
    if (!isConnected) {
      Keyboard.dismiss();
    }
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
          return (
            key !== 'initialRouteName' && (
              <>
                <Stack.Screen
                  key={`${index}`}
                  name={object[key]?.name ?? key}
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

  ChatFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.TAB_NAV.CHAT}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={Routes.TAB_NAV.CHAT} component={ChatScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  CommunityFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.TAB_NAV.COMMUNITY}
        screenOptions={screenOptionsObject}>
        <Stack.Screen
          name={Routes.TAB_NAV.COMMUNITY}
          component={CommunityScreen}
        />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  WalletTabFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.TAB_NAV.WALLET}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={Routes.TAB_NAV.WALLET} component={WalletScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  BrowserFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.TAB_NAV.BROWSER}
        screenOptions={screenOptionsObject}>
        <Stack.Screen name={Routes.TAB_NAV.BROWSER} component={BrowserScreen} />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };
  SettingsFlow = () => {
    return (
      <Stack.Navigator
        initialRouteName={Routes.TAB_NAV.SETTINGS}
        screenOptions={screenOptionsObject}>
        <Stack.Screen
          name={Routes.TAB_NAV.SETTINGS}
          component={SettingScreen}
        />
        {this.getStackFromJSON(commonScreens)}
      </Stack.Navigator>
    );
  };

  DefaultNavigation = () => {
    const {colors} = useTheme();
    return (
      <Tab.Navigator
        initialRouteName={Routes.HOME_NAV.WALLET_TAB}
        screenOptions={props => {
          return {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarItemStyle: {
              height: theme.normalize(65),
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle: {
              backgroundColor: colors.black,
              position: 'absolute',
              bottom: 5,
              left: theme.sizes.spacing.ph,
              right: theme.sizes.spacing.ph,
              borderRadius: theme.normalize(70),
              height: theme.normalize(65),
              borderWidth: 1,
              borderTopWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderTopColor: 'rgba(255, 255, 255, 0.1)',
            },
            tabBarHideOnKeyboard: true,
          };
        }}>
        <Tab.Screen
          name={Routes.HOME_NAV.CHAT_TAB}
          component={this.ChatFlow}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomIcon
                  name={focused ? 'Message-21' : 'Message-2'}
                  color={'#23CBCA'}
                  size={theme.sizes.icons.xl4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.HOME_NAV.COMMUNITY_TAB}
          component={this.CommunityFlow}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomIcon
                  name={focused ? 'user_21' : 'user_1'}
                  color={'#23CBCA'}
                  size={theme.sizes.icons.xl4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.HOME_NAV.WALLET_TAB}
          component={this.WalletTabFlow}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomIcon
                  name={'Scan'}
                  color={'#23CBCA'}
                  size={theme.sizes.icons.xl15}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.HOME_NAV.BROWSER_TAB}
          component={this.BrowserFlow}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomIcon
                  name={focused ? 'Globe-2' : 'Globe-1'}
                  color={'#23CBCA'}
                  size={theme.sizes.icons.xl4}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={Routes.HOME_NAV.SETTINGS_TAB}
          component={this.SettingsFlow}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <CustomIcon
                  name={focused ? 'Setting1' : 'Setting'}
                  color={'#23CBCA'}
                  size={theme.sizes.icons.xl4}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

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
        <View style={styles.wrapper}>
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
              initialRouteName={Routes.SPLASH_SCREEN}
              screenOptions={screenOptionsObject}>
              <Stack.Screen
                name={Routes.SPLASH_SCREEN}
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.ONBOARDING.ONBOARDING}
                component={WelcomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.ONBOARDING.SECURITY}
                component={SecurityScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.ONBOARDING.SELECT_WALLET}
                component={SelectWalletScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.MANUAL_BACKUP_STEP}
                component={ManualBackupStep}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.SEED_PHRASE}
                component={ConfirmSeedPhrase}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.HOME_NAV.ROOT_NAV}
                component={this.DefaultNavigation}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.ACTIVE_CHAT_VIEW}
                component={ChatViewScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.ONBOARDING.IMPORT_WALLET}
                component={ImportWallet}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.NOTIFICATION}
                component={NotificationScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.CREATE_PASSWORD}
                component={CreatePassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={Routes.VERIFY_PASSWORD}
                component={VerifyPassword}
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

const styles = StyleSheet.create({
  wrapper: {flex: 1},
});
