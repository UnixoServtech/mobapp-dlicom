import {types} from '../actions';

const initialState = {
  loading: false,
  defaultWallet: {}, // Default is info. of initial Wallet.
  selectedNetwork: '', // Current selected Network.
  selectedWallet: {}, // Selected Wallet info.
  wallets: [], // List of wallets.
  networks: [], // List of Networks.
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case types.API_LOADING_START:
      return {...state, loading: true};
    case types.API_LOADING_STOP:
      return {...state, loading: false};
    case types.IMPORT_NEW_WALLET:
      return {...state, wallets: [...state.wallets, action.payload]};
    default:
      return state;
  }
};

export default global;
