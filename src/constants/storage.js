// import AsyncStorage from '@react-native-community/async-storage';

const mm = 'Dilcom';
const prefix = `@${mm}:`;

export const LOCAL_STORAGE = {
  EXISTING_USER: `${prefix}existingUser`,
  REFRESH_TOKEN: `${prefix}refreshToken`,
  AUTH_TOKEN: `${prefix}authToken`,
  IS_LOGIN: `${prefix}isLogin`,
  USER_PROFILE: `${prefix}userProfile`,
  USER_DETAIL: `${prefix}userDetail`,
  USER_PREFERENCE: `${prefix}user_preference`,
  AGENT_ACCOUNT_LIST: `${prefix}AGENT_ACCOUNT_LIST`,
  USER_LIST: `${prefix}USER_LIST`,
  NOTIFICATION_TOKEN: `${prefix}NOTIFICATION_TOKEN`,
  LANGUAGE: `${prefix}LANGUAGE`,
  CONVERSATION_USERS: `${prefix}conversationUsers`,
  BIOMETRY: `${prefix}biometry`,
  PASSWORD: `${prefix}password`,
};

// export const STATIC_USER_ID = '47734';
// export const static_conversation_key =
//   '5838d77d903e4142a5521a091d02580e1692859687';

// // USER_DATA:'user_data',

// export const removeItemFromStorage = key => {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.removeItem(key);
//     resolve();
//   });
// };
