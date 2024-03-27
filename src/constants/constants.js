import images from '../assets/images';

export const AppConstant = {
  chatType: 1,
  statusType: 2,
  tokenType: 1,
  swapType: 2,
};

export const OnBoardItems = [
  {
    id: '0',
    title: 'Crypto Wallet',
    subtitle:
      'Securely manage your digital assets send, and receive cryptocurrencies ',
    image: images.onboarding_1,
  },
  {
    id: '1',
    title: 'Chat & Status',
    subtitle:
      'Securely manage your digital assets send, and receive cryptocurrencies',
    image: images.onboarding_2,
  },
  {
    id: '2',
    title: 'Communities',
    subtitle:
      'Securely manage your digital assets send, and receive cryptocurrencies',
    image: images.onboarding_3,
  },
];

export const TOKENS = {
  'ethereum:0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce': {
    tokenAddress: 'ethereum:0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
    tokenSymbol: 'SHIB',
    tokenName: 'Shiba Inu',
  },
  'ethereum:0x6b175474e89094c44da98b954eedeac495271d0f': {
    tokenAddress: 'ethereum:0x6b175474e89094c44da98b954eedeac495271d0f',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
    tokenSymbol: 'DAI',
    tokenName: 'Dai',
  },
  'ethereum:0xdac17f958d2ee523a2206206994597c13d831ec7': {
    tokenAddress: 'ethereum:0xdac17f958d2ee523a2206206994597c13d831ec7',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    tokenSymbol: 'USDT',
    tokenName: 'Tether USDt',
  },
  'ethereum:0x3c3a81e81dc49a522a592e7622a7e711c06bf354': {
    tokenAddress: 'ethereum:0x3c3a81e81dc49a522a592e7622a7e711c06bf354',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png',
    tokenSymbol: 'MNT',
    tokenName: 'Mantle',
  },
  'ethereum:0xf418588522d5dd018b425E472991E52EBBeEEEEE': {
    tokenAddress: 'ethereum:0xf418588522d5dd018b425E472991E52EBBeEEEEE',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/9111.png',
    tokenSymbol: 'PUSH',
    tokenName: 'Push Protocol',
  },
  'ethereum:0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0': {
    tokenAddress: 'ethereum:0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/7664.png',
    tokenSymbol: 'UNCX',
    tokenName: 'UNCX Network ',
  },
  'ethereum:0xa2E3356610840701BDf5611a53974510Ae27E2e1': {
    tokenAddress: 'ethereum:0xa2E3356610840701BDf5611a53974510Ae27E2e1',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/24760.png',
    tokenSymbol: 'WBETH',
    tokenName: 'Wrapped Beacon ETH',
  },
  'ethereum:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
    tokenAddress: 'ethereum:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    tokenImageUri:
      'https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png',
    tokenSymbol: 'WETH',
    tokenName: 'WETH',
  },
};

export let mnemonic = '';
