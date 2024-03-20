const Routes = {
  SPLASH_SCREEN: 'Splash',
  ONBOARDING: {
    IMPORT_WALLET: 'ImportWallet',
    SELECT_WALLET: 'SelectWallet',
    ONBOARDING: 'Onboarding',
    SECURITY: 'SecurityCheck',
  },
  WALLET_VIEW: 'WalletView',
  MANUAL_BACKUP_STEP: 'ManualBackupStep',
  SEED_PHRASE: 'ConfirmSeedPhrase',
  HOME_NAV: {
    ROOT_NAV: 'HomeView',
    WALLET_TAB: 'WalletView',
    CHAT_TAB: 'ChatView',
    COMMUNITY_TAB: 'CommunityView',
    BROWSER_TAB: 'BrowserView',
    SETTINGS_TAB: 'SettingsView',
  },
  TAB_NAV: {
    CHAT: 'ChatScreen',
    COMMUNITY: 'Community',
    WALLET: 'Wallet',
    BROWSER: 'Browser',
    SETTINGS: 'Settings',
  },
  ACTIVE_CHAT_VIEW: 'ActiveChatView',
  GROUP_VIEW: 'GroupView',
  SELECT_COIN: 'SelectCoinView',
  NOTIFICATION: 'NotificationView',
  SETTINGS: {
    PRIVACY_SECURITY: 'PrivacySecurityView',
    PROFILE: 'ProfileView',
    PRIVACY: 'PrivacyView',
    NOTIFICATIONS: 'NotificationsView',
    NOTIFICATION_PREFERENCES: 'NotificationPreferences',
  },
  MANAGE_TOKEN_VIEW: 'ManageToken',
};

export default Routes;
