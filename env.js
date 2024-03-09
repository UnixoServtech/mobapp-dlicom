import {Method} from './src/networking';
export const apiConfig = {
  productionBaseURL: 'https://app.wotnot.io' /*release build*/,
  testingBaseURL: 'https://app.test.wotnot.io' /*inteneal testing*/,
  developmentBaseURL: 'https://app.dev.wotnot.io' /*for client test*/,
  alphaBaseURL: 'https://app.wotnot.io',
};

export const endPoints = {
  login: {
    endpoint: '/v1/user-login',
    method: Method.POST,
  },
  fetchLabel: account_id => {
    return {
      endpoint: `/v1/account/${account_id}/labels?account_id=${account_id}`,
      method: Method.GET,
    };
  },
  fetchUserPreference: query => {
    return {
      endpoint: `/v1/user-preference?${query}}`,
      method: Method.GET,
    };
  },
  fetchTeam: (account_id, offset) => {
    return {
      endpoint: `/v1/accounts/${account_id}/teams?order_by=name&order=asc&limit=20&offset=${offset}`,
      method: Method.GET,
    };
  },
  fetchTeammates: account_id => {
    return {
      endpoint: `/v1/account/${account_id}/users`,
      method: Method.POST,
    };
  },
  fetchSavedReply: (account_id, from, limit, query) => {
    return {
      endpoint: `/v1/account/${account_id}/saved-replies?&from=${from}&limit=${limit}&sort_type=desc&sort_by=frequency&query=${query}`,
      // endpoint: `/v1/account/${account_id}/saved-replies?&sort_type=desc&sort_by=frequency`,
      method: Method.GET,
    };
  },
  fetchConversation: (account_id, status_id, limit) => {
    return {
      endpoint: `/v1/accounts/${account_id}/conversations?status_ids=${status_id}&is_order_by_asc=false&limit=${limit}`,
      method: Method.GET,
    };
  },
  conversationSummary: account_id => {
    return {
      endpoint: `/v1/accounts/${account_id}/conversations/summary`,
      method: Method.GET,
    };
  },
  fetchQualifications: conversation_key => {
    return {
      endpoint: `/v2/conversations/${conversation_key}/qualifications`,
      method: Method.GET,
    };
  },
  saveLabel: conversation_key => {
    return {
      endpoint: `/v1/conversations/${conversation_key}/labels`,
      method: Method.PUT,
    };
  },
  deleteLabel: (conversation_key, label_id) => {
    return {
      endpoint: `/v1/conversations/${conversation_key}/labels?ids=${label_id}`,
      method: Method.DELETE,
    };
  },
  fetchConversationBySearch: (account_id, query) => {
    return {
      endpoint: `/v1/accounts/${account_id}/conversations?${query}`,
      method: Method.GET,
    };
  },
  resetPwdLink: {
    endpoint: '/v1/reset-password-link',
    method: Method.POST,
  },
  twoFactorCode: {
    endpoint: '/v1/sessions/two-factor',
    method: Method.GET,
  },
  verifyOtp: {
    endpoint: '/v1/user/totp/verify',
    method: Method.POST,
  },
  recoveryCode: {
    endpoint: '/v1/user/authenticate/recovery-code',
    method: Method.POST,
  },
  incomingEvents: agent_id => {
    return {
      endpoint: `/v1/agents/${agent_id}/incoming-events`,
      method: Method.GET,
    };
  },
  profileEvents: agent_id => {
    return {
      endpoint: `/v1/agents/${agent_id}/profile-events`,
      method: Method.POST,
    };
  },
  accountSettings: account_id => {
    return {
      endpoint: `/v1/accounts/${account_id}/settings`,
      method: Method.GET,
    };
  },
  userLogout: {
    endpoint: '/v1/user-logout',
    method: Method.GET,
  },
  notificationPreference: {
    endpoint: '/v1/notification-preference',
    method: Method.GET,
  },
  storeNotificationToken: {
    endpoint: '/v1/notification-token?type=PWA', // {{param :"token": notificationToken}}
    method: Method.POST,
  },
  removeNotificationToken: {
    endpoint: '/v1/notification-token', // {{param :"token": notificationToken}}
    method: Method.DELETE,
  },
  accounts: {
    endpoint: '/v2/accounts', // {{param :"token": notificationToken}}
    method: Method.GET,
  },
  changeAccount: {
    endpoint: '/v1/user-preference',
    method: Method.POST,
  },
  setIncomingEvents: agent_id => {
    return {
      endpoint: `/v1/agents/${agent_id}/incoming-events`,
      method: Method.POST,
    };
  },
  fetchConversationHistory: (thread_key, query) => {
    return {
      endpoint: `/v1/conversations/${thread_key}/history?${query}`,
      method: Method.GET,
    };
  },
  changeNotificationPreference: {
    endpoint: '/v1/notification-preference',
    method: Method.PUT,
  },
  fetchUserList: account_id => {
    return {
      endpoint: `/v1/user-list?${account_id}`,
      method: Method.GET,
    };
  },
  uploadAttachment: {
    endpoint: '/v1/livechat-file-attachment',
    method: Method.POST,
  },
  userSettings: account_id => {
    return {
      endpoint: `/v1/accounts/${account_id}/settings`,
      method: Method.GET,
    };
  },
  changeUserSetting: {
    endpoint: '/v1/user',
    method: Method.PUT,
  },
  fetchSavedReplySearch: (account_id, query) => {
    return {
      endpoint: `/v1/account/${account_id}/saved-replies?query=${query}&sort_type=desc&sort_by=frequency`,
      method: Method.GET,
    };
  },
  calendarEvent: account_id => {
    return {
      endpoint: `/v1/accounts/${account_id}/calendar/events`,
      method: Method.GET,
    };
  },
};
